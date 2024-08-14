document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hearts-container');

    // 函数：创建并显示一个新的爱心
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // 随机颜色
        const randomColor = `rgb(${Math.random() * 128 + 128}, ${Math.random() * 128}, ${Math.random() * 128})`;
        heart.style.backgroundColor = randomColor;

        // 随机大小
        const randomSize = Math.random() * 30 + 10; // 大小范围在10px到40px之间
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        // 设置伪元素的颜色和大小
        heart.style.setProperty('--heart-color', randomColor);
        heart.style.setProperty('--heart-size', `${randomSize}px`);

        // 随机位置
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;

        // 随机浮动偏移量
        const randomFloatOffset = Math.random() * 20 + 10; // 浮动偏移量在10px到30px之间
        heart.style.setProperty('--float-offset', `${randomFloatOffset}px`);

        // 动态计算当前浮动位置
        const floatAnimationDuration = 3000; // 与float动画的时长一致
        const delay = Math.random() * 2000 + 3000; // 随机延迟开始growAndFade动画

        setTimeout(() => {
            // 计算当前浮动的位移
            const timeFraction = (delay % floatAnimationDuration) / floatAnimationDuration;
            const currentOffset = timeFraction <= 0.5
                ? timeFraction * 2 * randomFloatOffset // 前半段动画（向下移动）
                : (1 - timeFraction) * 2 * randomFloatOffset; // 后半段动画（向上移动）

            // 将当前位移锁定为自定义属性
            heart.style.setProperty('--current-offset', `${currentOffset}px`);

            // 开始growAndFade动画
            heart.style.animation = 'growAndFade 2s forwards';

            // 在动画结束后移除爱心
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }, delay);

        container.appendChild(heart);
    }

    for (let i = 0; i < 5; i++)
        createHeart(); // 创建5个爱心
    // 动态生成爱心，每隔一定时间创建一个新的爱心
    setInterval(createHeart, 1000); // 每隔1秒生成一个新爱心
});
