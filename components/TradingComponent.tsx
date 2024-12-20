// import React from "react";
// import { View, Text, Dimensions } from "react-native";
// import { LineChart, LineChartProvider } from "react-native-wagmi-charts";

// interface TradeData {
//   timestamp: number;
//   value: number;
//   type: "buy" | "sell";
// }

// const TradingHistoryChart: React.FC = () => {
//   // Sample data - replace with your actual chartData
//   const data: TradeData[] = [
//     { timestamp: 1641024000000, value: 2000, type: "buy" }, // Jan 1
//     { timestamp: 1641369600000, value: 2200, type: "sell" }, // Jan 5
//     { timestamp: 1641801600000, value: 1800, type: "buy" }, // Jan 10
//     { timestamp: 1642233600000, value: 2500, type: "sell" }, // Jan 15
//     { timestamp: 1642665600000, value: 2300, type: "buy" }, // Jan 20
//     { timestamp: 1643097600000, value: 2800, type: "sell" }, // Jan 25
//   ];

//   // Transform data for the chart
//   const chartData = data.map((item) => ({
//     timestamp: item.timestamp,
//     value: item.value,
//   }));

//   return (
//     <View className="bg-gray-400/5 p-4 rounded-2xl">
//       <LineChartProvider data={chartData}>
//         <View style={{ height: 200 }}>
//           <LineChart height={200}>
//             <LineChart.Path color="#42DBF0" width={2} />
//             <LineChart.CursorCrosshair color="#42DBF0" />
//             <LineChart.Gradient />
//           </LineChart>

//           {/* Transaction Points */}
//           {data.map((item, index) => (
//             <View
//               key={index}
//               style={{
//                 position: "absolute",
//                 left:
//                   (index / (data.length - 1)) *
//                   (Dimensions.get("window").width - 80),
//                 top:
//                   200 -
//                   ((item.value - Math.min(...data.map((d) => d.value))) /
//                     (Math.max(...data.map((d) => d.value)) -
//                       Math.min(...data.map((d) => d.value)))) *
//                     180,
//               }}
//             >
//               <View
//                 className={`w-3 h-3 rounded-full ${
//                   item.type === "buy" ? "bg-green-500" : "bg-[#ff4444]"
//                 }`}
//               />
//             </View>
//           ))}
//         </View>
//       </LineChartProvider>

//       {/* Legend */}
//       <View className="flex-row justify-center space-x-6 mt-6">
//         <View className="flex-row items-center">
//           <View className="w-3 h-3 rounded-full bg-green-500 mr-2" />
//           <Text className="text-white">Buy</Text>
//         </View>
//         <View className="flex-row items-center">
//           <View className="w-3 h-3 rounded-full bg-[#ff4444] mr-2" />
//           <Text className="text-white">Sell</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default TradingHistoryChart;

import React from "react";
import { View, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
  const yAxisLabels = [0, 5000, 10000, 15000, 20000];

  return (
    <SafeAreaView className="bg-gray-400/5 rounded-3xl p-6">
      {/* Header */}
      <View className="flex-row justify-between mb-4">
        <Text className="text-2xl font-bold text-white">Trend</Text>
        <View className="flex-row space-x-3">
          <View className="bg-primary px-4 py-1 rounded-full">
            <Text className="text-black font-bold">High</Text>
          </View>
          <View className="px-4 py-1">
            <Text className="text-white font-bold">Medium</Text>
          </View>
          <View className="px-4 py-1">
            <Text className="text-white font-bold">Low</Text>
          </View>
        </View>
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
        <View style={{ width: windowWidth - 40 }}>
          {" "}
          {/* Subtract Y-axis width */}
          <LineChartProvider data={chartData}>
            <LineChart height={180}>
              {/* Grid Lines */}
              {yAxisLabels.map((_, index) => (
                <View
                  key={index}
                  className="border-t border-dotted border-gray-200"
                  style={{
                    position: "absolute",
                    width: "100%",
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
                  left: (index / (data.length - 1)) * (windowWidth - 40),
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
    </SafeAreaView>
  );
};

export default TradingHistoryChart;