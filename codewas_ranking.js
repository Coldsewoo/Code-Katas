const rankArr = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }


  incProgress(level) {
    const levelIndex = rankArr.indexOf(level);
    const rankIndex = rankArr.indexOf(this.rank);
    const progressLv = levelIndex - rankIndex;
    if (levelIndex === -1 || rankIndex === -1) throw new Error();
    else if (progressLv < -1) this.progress += 0;
    else if (progressLv === -1) this.progress += 1;
    else if (progressLv === 0) this.progress += 3;
    else this.progress += (10 * progressLv * progressLv);


    let rankI = rankIndex;
    while (this.progress >= 100) {
      if (this.rank === 8) {
        this.progress = 0;
        break;
      }
      this.progress -= 100;
      this.rank = rankArr[rankI + 1];
      rankI += 1;
    }
    if (this.rank === 8) {
      this.progress = 0;
    }
  }
}

const user = new User();

user.incProgress(8);
user.incProgress(8);
user; // ?
