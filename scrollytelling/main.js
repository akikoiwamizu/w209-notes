/* global d3, scrollama */

const width = 400,
    height = 400,
    margin = ({ top: 5, right: 5, bottom: 5, left: 5 }),
    side = 30;

const data = d3.range(20)
    .map(() => ({
        x: Math.random() * width,
        y: Math.random() * height
    }))

const circles = d3.select("svg")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", 10)
    .style("fill", "steelblue")

function moveLeft() {
    circles
        .transition()
        .duration(750)
        .attr("cx", 20)
}

function moveX() {
    circles
        .transition()
        .duration(750)
        .attr("cx", (d) => Math.random() * width) // .attr("cx", (d) => d.x)
}

function moveY() {
    circles
        .transition()
        .duration(750)
        .attr("cy", (d) => Math.random() * height) // .attr("cy", (d) => d.y)
}

//window.addEventListener("scroll", function (e) {
//    console.log(window.scrollY)
//})

const callbacks = [
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX
]

const steps = d3.selectAll(".step")

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
    .setup({
        step: ".step",
    })
    .onStepEnter((response) => {
        // { element, index, direction }
        callbacks[response.index]()

        steps.style("opacity", 0.1)
        d3.select(response.element).style("opacity", 1.0)

        console.log("enter", response)
    })
    .onStepExit((response) => {
        // { element, index, direction }
        console.log("exit", response)
    });

// setup resize event
window.addEventListener("resize", scroller.resize);