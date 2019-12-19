makeDivHeightDraggable("console", 200, 400);
log("MineMonitor", "Information");
log("Thanks to https://api.mcsrvstat.us for providing an API access.", "Default");
log("Current API refresh rate : 60 seconds", "Information");

var playerCountLabels = [];
var playerCountData = [];

var playerCountChart = new Chart($(".serverPlayerCounterChart"), {
    type: 'line',
    options: {
      global: {
        responsive: true,
        maintainAspectRatio: false
      }
    },
    data: {
      labels: playerCountLabels,
      datasets: [
        {
          label: 'Players',
          data: playerCountData,
          pointBackgroundColor: "rgb(48, 48, 48)",
          borderColor: "rgb(20, 255, 129)",
          backgroundColor: "rgb(0, 168, 79)"
        }
      ]
    }
  });


  function updatePlayerCountDisplay(playerCount)
  {
      playerCountLabels.push(new Date().getHours() + ":" + new Date().getMinutes());
      playerCountData.push(playerCount);
      playerCountChart.update();
  }