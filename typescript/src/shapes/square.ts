function square(sideLen: number): Shape {
    let internalSideLen = sideLen;
    
    return {
        computeArea: function (): number {
            return internalSideLen * internalSideLen
        }
    }
}

export { square }