import { createClient } from "@sanity/client";
import fetch from "node-fetch";
import { IgApiClient } from "instagram-private-api";
import { NextRequest } from "next/server";

const client = createClient({
  projectId: "yp0g8jjw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
  token: process.env.SANITY_BOT_TOKEN,
});

export async function GET(req: NextRequest) {
  try {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME || "");
    await ig.account.login(
      process.env.IG_USERNAME || "",
      process.env.IG_PASSWORD || ""
    );

    const targetUserId = await ig.user.getIdByUsername("apollon_afrodite");
    const userFeed = ig.feed.user(targetUserId);

    const photos = [];
    while (photos.length < 30) {
      let items = await userFeed.items();
      if (items.length === 0) break;

      for (let i = 0; i < items.length; i++) {
        console.log("Processing item: ", i);
        const imageUrl = items[i].image_versions2.candidates[0].url;
        const timestamp = items[i].taken_at;

        // Fetch the image from the URL
        const response = await fetch(imageUrl);
        if (!response.ok)
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const date = new Date(timestamp * 1000);

        const query = `*[_type == "seasonImgs" && seasonName == "${getSeason(
          date
        )}"]`;
        const existingDocs = await client.fetch(query);
        console.log("Existing docs: ", existingDocs);

        let docId;
        if (existingDocs.length > 0) {
          // Document exists, so we'll update it
          docId = existingDocs[0]._id;
        } else {
          // Create a new document for this season and year
          const newDoc = {
            _type: "seasonImgs",
            seasonName: getSeason(date),
            images: [],
          };
          const createdDoc = await client.create(newDoc);
          docId = createdDoc._id;
        }

        // Upload the image buffer to Sanity
        const imageAsset = await client.assets.upload("image", buffer, {
          filename: `image-${timestamp}.jpg`,
          contentType: "image/jpeg",
        });

        console.log("Image asset: ", imageAsset);

        const result = await client
          .patch(docId)
          .append("images", [
            {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageAsset._id,
              },
              _key: imageAsset._id,
            },
          ])
          .commit();
        console.log("Result: ", result);

        photos.push({ url: imageUrl, timestamp, date });
        if (photos.length >= 15) break;
      }
    }

    return new Response(JSON.stringify(photos), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

function getSeason(date: Date) {
  const month = date.getMonth();
  let year = date.getFullYear();

  if (month < 2 || month === 11) {
    // For the winter months (December, January, February)
    if (month === 11) {
      // If the month is December, increment the year
      return `winter_${year + 1}`;
    } else {
      // For January and February, keep the year as is
      return `winter_${year}`;
    }
  } else if (month < 5) {
    return `spring_${year}`;
  } else if (month < 8) {
    return `summer_${year}`;
  } else {
    return `fall_${year}`;
  }
}
