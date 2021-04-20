const cleanRoom = (robot) => {
    const boxSet = new Set(); // 用于记录清扫过的坐标
    let dir = 0; // 初始化及其人方向
    const dfs = (robot, boxSet, i, j) => {
        let box = i + '+' + j;
        if (boxSet.has(box)) return;
        robot.clean();
        boxSet.add(box);
        for (let k = 0; k < 4; k++) {
            if (robot.move()) {
                let x = i;
                let y = j;
                switch(dir) {
                    case 0:
                        x = i - 1;
                        break;
                    case 90:
                        y = j + 1;
                        break;
                    case 180:
                        x = i + 1;
                        break;
                    case 270:
                        y = j - 1;
                        break;
                    default:
                        break;
                }
            }
            dfs(robot, boxSet, x, y);
            // 一个方向的dfs结束了，意味着撞到了南墙，此时我们需要回溯到上一个格子
            robot.turnLeft();
            robot.turnLeft();
            robot.move();
            robot.turnRight();
            robot.turnRight();
        }
        // 专向
        robot.turnRight();
        dir += 90;
        dir %= 360;
    }
    dfs(robot, boxSet, 0, 0, 0);
}