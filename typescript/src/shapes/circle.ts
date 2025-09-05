function circle(radius: number): Shape {
    let internalRadius = radius;
    
    return {
        computeArea: function (): number {
            return Math.PI * internalRadius * internalRadius
        }
    }
}

export { circle }
