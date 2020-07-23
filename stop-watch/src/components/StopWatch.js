class StopWatch {
  constructor() { this.stop();  }

  start() {
    this.timeStarted = Date.now();
  }
  
  stop() {
    this.timeStarted = null;
    this.laps = [];
    this.minLapRecord = null;
    this.maxLapRecord = null;
    this.sumOfLapTimes = 0;
    this.elapsedTimeWhenPaused = null;
  }
  
  pause() {
    if (this.timeStarted === null) return;

    this.elapsedTimeWhenPaused = this.elapsedTime();
  }

  resume() {
    if (this.elapsedTimeWhenPaused === null) return;

    this.timeStarted = Date.now() - this.elapsedTimeWhenPaused;

    this.elapsedTimeWhenPaused = null;
  }
  
  elapsedTime() {
    if (this.timeStarted  === null) return 0;
    return Date.now() - this.timeStarted;
  }

  newLap() {
    if (this.timeStarted === null) return;
    if (this.elapsedTimeWhenPaused === null) return;

    let newRecord = (this.laps.length > 0) ? this.elapsedTime() - this.sumOfLapTimes : this.elapsedTime();
    this.laps.push(newRecord);
    this.sumOfLapTimes += newRecord;

    if (this.minLapRecord === null || this.minLapRecord > newRecord) this.minLapRecord = newRecord;
    if (this.maxLapRecord < newRecord) this.maxLapRecord = newRecord;
  }
  
  laps() {
    return this.laps;
  }

  minLap() {
    return this.minLapRecord;
  }
  
  maxLap() {
    return this.maxLapRecord;
  }

  convertMilliSecondsToTime(milliSecondsValue) {
    let elapsedSeconds = Math.floor(milliSecondsValue / 1000);
    
    let cs = Math.round((milliSecondsValue % 1000) / 10).toString().padStart(2, 0);
    let s = (elapsedSeconds % 60).toString().padStart(2, 0);
    let m = (Math.floor(elapsedSeconds / 60) % 60).toString().padStart(2, 0);
    let hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, 0);
    hours = hours !== '00' ? `${hours}:` : '';
  
    return `${hours}${m}:${s},${cs}`;
  }
  
}

