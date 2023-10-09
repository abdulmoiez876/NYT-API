import React from 'react'

export default function StoryCard(props) {
    return (
        <div style={{
            backgroundColor: "#EEEEEE",
            width: "30vw",
            height: '400px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "10px",
            cursor: "pointer",
        }}
            onClick={() => {
                window.open(props.url, "_blank")
            }}
        >
            <img src={props.img} alt="story" width={"100%"} height={"300px"} />
            <h3 style={{
                padding: "0px 5px 10px 10px"

            }}>{props.title}</h3>
        </div>
    )
}
