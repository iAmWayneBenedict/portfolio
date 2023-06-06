let isSwiping = false;
let startX = 0;
let startY = 0;

const handleTouchStart = ({
                              currentX,
                              currentY,
                          }:{
    currentX: number;
    currentY: number;
}) => {
    isSwiping = true;
    startX = currentX;
    startY = currentY;
};

const handleTouchMove = ({
                             currentX,
                             currentY,
                         }:{
    currentX: number;
    currentY: number;
}, element: string) => {
    if (isSwiping) {
        const mainCursor = document.querySelector(element) as HTMLDivElement
        const mouseThree = () => {


            const mouseX = currentX;
            const mouseY = currentY;

            if (!mainCursor) return;
            mainCursor.style.transform = `translate3d(${
                mouseX - mainCursor.clientWidth / 2
            }px, ${mouseY - mainCursor.clientHeight / 2}px, 0)`;
        };
        mouseThree();
    }
};

const handleTouchEnd = () => {
    isSwiping = false;
};

export {
    isSwiping,
    startX,
    startY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
}