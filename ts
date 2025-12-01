data("AirPassengers")
ts_data <- AirPassengers
plot(ts_data,
main = "AirPassengers Data (1949-1960)", xlab = "Year",
ylab = "Number of Passengers", col = "blue",
lwd = 2
)grid()
