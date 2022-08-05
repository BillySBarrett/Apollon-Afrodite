import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Gallery extends Component {
    
    constructor(props) {
        super(props);
        this.state = {seasons: [
        {id: 1, season: 'Sommer 2022', pictures: ['./Summer2022/1.jpeg','./Summer2022/2.jpeg',
        './Summer2022/3.jpeg','./Summer2022/4.jpeg','./Summer2022/5.jpeg','./Summer2022/6.jpeg']}, 
        {id: 2, season: 'Vinter 2022', pictures: ['./Høst2022/1.png','./Høst2022/2.png',
        './Høst2022/3.png','./Høst2022/4.png','./Høst2022/5.png']}, 
        {id: 3, season: 'Vår 2022', pictures: ['test',"test2"]}]};
        
    }

    setSeasons(event) {
        console.log(event);
    }

    render() { 
        return (
            <div className="font-display bg-white ">
                <Tabs className="flex flex-row" selectedTabClassName="border-r-0 bg-sky-200">
                    <TabList className="w-72 pt-[9.5rem]" >
                        {this.state.seasons.map(sea => {
                            return (
                                <Tab className=" h-[3rem] flex justify-center items-center text-center border-black " >
                                <p>{sea.season}</p>
                            </Tab>

                            );
                        })}

                    </TabList>

                    <div className="w-full">
                        <h2 className="flex justify-center pt-10 text-4xl font-bold">Vis fram din stil</h2>
                        <h3 className="flex justify-center pb-10 text-2xl font-light">La oss hjelpe deg</h3>
                        {this.state.seasons.map(sea => {
                                return (
                                <TabPanel className=" grid gap-2 grid-rows-2 justify-items-center mr-5 grid-span-2 grid-flow-col  ">
                                    {sea.pictures.map(picture => {
                                        return (
                                            <img src={picture} alt={picture} className="h-96"></img>
                                        )        
                                    })}
                                </TabPanel>
                                );
                            })}
                    </div>
                </Tabs>
            </div>
        )
    }
}