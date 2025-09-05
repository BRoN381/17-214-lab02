interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Shape {
    let internalWidth = width;
    let internalHeight = height;
    
    return {
        computeArea: function (): number {
            return internalWidth * internalHeight
        }
    }
}

export { Rectangle, newRectangle }
