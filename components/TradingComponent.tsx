import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Dimensions } from "react-native";
import { LineChart, LineChartProvider } from "react-native-wagmi-charts";

interface TradeData {
  timestamp: number;
  value: number;
  type: "buy" | "sell";
}

const TradingHistoryChart: React.FC = () => {
  const windowWidth = Dimensions.get("window").width - 48; // Accounting for padding

  // Sample data - replace with your actual data
  const data: TradeData[] = [
    { timestamp: 1641024000000, value: 5000, type: "buy" },
    { timestamp: 1641369600000, value: 10000, type: "buy" },
    { timestamp: 1641801600000, value: 15674, type: "sell" },
    { timestamp: 1642233600000, value: 12500, type: "sell" },
    { timestamp: 1642665600000, value: 8300, type: "buy" },
  ];

  // Transform data for the chart
  const chartData = data.map((item) => ({
    timestamp: item.timestamp,
    value: item.value,
  }));

  // Calculate Y-axis labels
  const maxValue = Math.max(...data.map((d) => d.value));
  const yAxisLabels = [20000, 15000, 10000, 5000, 0];

  return (
    <View className="bg-gray-400/5 rounded-3xl p-6">
      {/* Header */}
      <View className="mb-4">
        <Text className="text-2xl font-bold text-white">Trend</Text>
      </View>

      {/* Chart Container */}
      <View className="h-[200px] flex-row">
        {/* Y-axis */}
        <View className="justify-between pr-2">
          {yAxisLabels.map((label, index) => (
            <Text key={index} className="text-gray-400 text-xs">
              {label > 999 ? `${label / 1000}K` : label}
            </Text>
          ))}
        </View>

        {/* Chart */}
        <View style={{ width: windowWidth - 60 }}>
          <LineChartProvider data={chartData}>
            <LineChart height={180} width={windowWidth - 50}>
              {yAxisLabels.map((_, index) => (
                <View
                  key={index}
                  className="border-t border-dotted border-gray-200/20"
                  style={{
                    position: "absolute",
                    width: "104%",
                    top: index * (180 / (yAxisLabels.length - 1)),
                  }}
                />
              ))}

              <LineChart.Path
                color="#42DBF0"
                width={2}
                inactiveColor="#42DBF0"
              />
              <LineChart.CursorCrosshair color="#42DBF0" />
            </LineChart>

            {/* Transaction Points */}
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  position: "absolute",
                  left: (index / (data.length - 1)) * (windowWidth - 60),
                  top: 180 - (item.value / maxValue) * 180,
                }}
              >
                <View
                  className={`w-3 h-3 rounded-full border-2 ${
                    item.type === "buy"
                      ? "border-green-500 bg-green-500"
                      : "border-[#ff4444] bg-[#ff4444]"
                  }`}
                />
              </View>
            ))}
          </LineChartProvider>
        </View>
      </View>

      {/* X-axis dates */}
      <View className="flex-row justify-between mt-2 pl-8">
        {["29 Oct", "30 Oct", "01 Nov", "02 Nov"].map((date, index) => (
          <Text key={index} className="text-xs text-gray-400">
            {date}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default TradingHistoryChart;
