import React from "react";

export default class OpenHeader extends React.Component {
    state={
        openness : new Date().getHours(),
        dayOfWeek: new Date().getDay(),
        timezone: new Date().getTimezoneOffset(),
        //Timezone is not considered. Consider change
      }

    render() {
        if ( ( (this.state.dayOfWeek >= 1 && this.state.dayOfWeek <= 4)  //Between Monday and Thursday
            && this.state.openness < 17 && this.state.openness > 10)     // and between these times 
            || (this.state.dayOfWeek === 5                               // Friday closes 18 
                && (this.state.openness < 18 && this.state.openness > 10))
            || (this.state.dayOfWeek === 6                                //Saturday closes 16
                && (this.state.openness < 16 && this.state.openness > 10) )
                )
            {
            return (
                <div className="flex flex-row w-16">
                    <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="25" fill="#09EE49"/>
                    </svg>
                    <p>Åpent</p>
                </div>
            )
        }
        return (
            <div className="flex flex-row w-16">
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="25" fill="#F82323"/>
                </svg>
                <p>Stengt</p>
            </div>
        ) //Consider making code look cleaner ... Inline condition statements

    }
}