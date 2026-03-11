import React, { useState } from "react";
import { useLanguage } from "../../contexts/OptimizedLanguageContext";

interface H1Spec {
  model?: string;
  // Mechanical Parameters
  sizeStandard?: string;
  sizeLyingProne?: string;
  material?: string;
  weightWithoutBattery?: string;
  weightWithBattery?: string;
  degreeOfFreedom?: string;
  jointBearings?: string;
  jointMotora?: string;
  maxJointTorque?: string;
  rangeOfMotion?: string;
  // Electrical Characteristics
  supplyVoltage?: string;
  jointEncoder?: string;
  coolingSystem?: string;
  powerSupply?: string;
  batteryCapacity?: string;
  wifiBluetooth?: string;
  speaker?: string;
  microphone?: string;
  frontLight?: string;
  wirelessVectorModule?: string;
  gps?: string;
  fourG?: string;
  sensor?: string;
  controlCompute?: string;
  externalInterfaces?: string;
  // Performance Metrics
  operatingTemperature?: string;
  batteryLifeNoLoad?: string;
  batteryLifeWithLoad?: string;
  maxStandingLoad?: string;
  continuousWalkingLoad?: string;
  slopeWalkingCapability?: string;
  stairClimbingCapability?: string;
  maxClimbHeight?: string;
  movingSpeed?: string;
  replaceWheelLeg?: string;
  ingressProtectionRating?: string;
  // Others
  smartOtaUpgrade?: string;
  secondaryDevelopment?: string;
  warranty?: string;
  continuousUpgrades?: string;
}

const A2ComparisonChart: React.FC = () => {
  const { t } = useLanguage();
  const translateWithFallback = (key: string, fallback: string) => {
    const translated = t(key);
    return translated === key ? fallback : translated;
  };
  const translateLabel = (key: string, fallback: string) =>
    translateWithFallback(
      `a2Comparison${key.charAt(0).toUpperCase()}${key.slice(1)}`,
      fallback
    );
  const translateGroupTitle = (titleKey: string, fallback: string) =>
    translateWithFallback(`a2ComparisonGroup${titleKey}`, fallback);
  const translateModel = (model?: string) =>
    model ? translateWithFallback(`a2ComparisonModel${model.replace(/\\s+/g, "")}`, model) : "";
  const translateButton = (isExpanded: boolean) =>
    isExpanded
      ? translateWithFallback("a2ComparisonShowLess", "Show Less Specifications")
      : translateWithFallback("a2ComparisonShowMore", "Show More Specifications");
  const translateHeading = () =>
    translateWithFallback("a2ComparisonHeading", "A2 Series Comparison");

  const [showMoreSpecs, setShowMoreSpecs] = useState(false);

  const specifications: H1Spec[] = [
    {
      model: "A2",
      sizeStandard: "820mm × 440mm × 570mm",
      sizeLyingProne: "720mm × 550mm × 220mm",
      material: "Aluminum Alloy + High-Strength Engineering Plastic",
      weightWithoutBattery: "About 31kg",
      weightWithBattery: "About 37kg",
      degreeOfFreedom: "12",
      jointBearings:
        "Industrial-grade crossed roller bearings (high precision, high load capacity)",
      jointMotora:
        "Low-inertia, high-speed inner rotor PMSM (enhanced response & heat dissipation)",
      maxJointTorque: "About 180 N·m",
      rangeOfMotion:
        "Body: −58°~58°, Thigh: −134°~180° / −89°~225°, Shank: −158°~−30°",
      // Electrical
      supplyVoltage: "50.4V",
      jointEncoder: "Dual encoders",
      coolingSystem: "Local air Cooling",
      powerSupply: "Dual slots, dual batteries",
      batteryCapacity:
        "Single Battery 9000mAh (453.6Wh), Dual Batteries 18000mAh (907.2Wh)",
      wifiBluetooth: "YES",
      speaker: "YES",
      microphone: "Microphone array",
      frontLight: "YES",
      wirelessVectorModule: "/ (Optional)",
      gps: "/ (Optional)",
      fourG: "/ (Optional)",
      sensor: "LiDAR x 1 + HD Camera x 1",
      controlCompute:
        "Standard: 8-Core high-performance CPU (platform) + Intel Core i7 (user development)",
      externalInterfaces:
        "RS485 x 2 CAN x 2 Gigabit Ethernet x 2 USB3.0-TypeC(8-Core CPU) x 2 USB3.0-TypeC (Intel Core i7)x2 Power Output: 12V / 24V / BAT",
      // Performance
      operatingTemperature: "-20°C ~ 55°C",
      batteryLifeNoLoad: "5 hours continuous walking, approx. 20km",
      batteryLifeWithLoad: "3 hours continuous walking, approx. 12.5km",
      maxStandingLoad: "About 100kg",
      continuousWalkingLoad: "About 25kg",
      slopeWalkingCapability: "About 45°",
      stairClimbingCapability: "Max Step Height: 30cm",
      maxClimbHeight: "About 0.5~1m",
      movingSpeed: "Not specified",
      replaceWheelLeg: "Optional",
      ingressProtectionRating: "IP56",
      // Other
      smartOtaUpgrade: "Supported",
      secondaryDevelopment: "Supported",
      warranty: "12 Months",
      continuousUpgrades: "Continuous Upgrades",
    },
    {
      model: "A2 Pro",
      sizeStandard: "820mm × 440mm × 570mm",
      sizeLyingProne: "720mm × 550mm × 220mm",
      material: "Aluminum Alloy + High-Strength Engineering Plastic",
      weightWithoutBattery: "About 31kg",
      weightWithBattery: "About 37kg",
      degreeOfFreedom: "12",
      jointBearings:
        "Industrial-grade crossed roller bearings (high precision, high load capacity)",
      jointMotora:
        "Low-inertia, high-speed inner rotor PMSM (enhanced response & heat dissipation)",
      maxJointTorque: "About 180 N·m",
      rangeOfMotion:
        "Body: −58°~58°, Thigh: −134°~180° / −89°~225°, Shank: −158°~−30°",
      // Electrical
      supplyVoltage: "50.4V",
      jointEncoder: "Dual encoders",
      coolingSystem: "Local air Cooling",
      powerSupply: "Dual slots, dual batteries",
      batteryCapacity:
        "Single Battery 9000mAh (453.6Wh), Dual Batteries 18000mAh (907.2Wh)",
      wifiBluetooth: "YES",
      speaker: "YES",
      microphone: "Microphone array",
      frontLight: "YES",
      wirelessVectorModule: "Expand (Optional)",
      gps: "Expand (Optional)",
      fourG: "Expand (Optional)",
      sensor: "LiDAR x 2 + HD Camera x 1",
      controlCompute:
        "Standard: 8-Core high-performance CPU (platform) + Intel Core i7 (user development) Optional: high computing power expansion dock",
      externalInterfaces:
        "RS485 x 2 CAN x 2 Gigabit Ethernet x 2 USB3.0-TypeC(8-Core CPU) x 2 USB3.0-TypeC (Intel Core i7)x2 Power Output: 12V / 24V / BAT",
      // Performance
      operatingTemperature: "-20°C ~ 55°C",
      batteryLifeNoLoad: "5 hours continuous walking, approx. 20km",
      batteryLifeWithLoad: "3 hours continuous walking, approx. 12.5km",
      maxStandingLoad: "About 100kg",
      continuousWalkingLoad: "About 25kg",
      slopeWalkingCapability: "About 45°",
      stairClimbingCapability: "Max Step Height: 30cm",
      maxClimbHeight: "About 0.5~1m",
      movingSpeed: "Not specified",
      replaceWheelLeg: "Optional",
      ingressProtectionRating: "IP56-IP67 (Core components rated IP67)",
      // Other
      smartOtaUpgrade: "Supported",
      secondaryDevelopment: "Supported",
      warranty: "12 Months",
      continuousUpgrades: "Continuous Upgrades",
    },
  ];

  // Groups
  const group1Labels = {
    sizeStandard: "Size Standard",
    sizeLyingProne: "Size (Lying Prone)",
    material: "Material",
    weightWithoutBattery: "Weight (without battery)",
    weightWithBattery: "Weight (with battery)",
    degreeOfFreedom: "Degrees of Freedom (joint motors)",
    jointBearings: "Joint Bearings",
    jointMotora: "Joint Motors",
    maxJointTorque: "Max Joint Torque",
    rangeOfMotion: "Range of Motion",
  };

  const group2Labels = {
    supplyVoltage: "Supply Voltage",
    jointEncoder: "Joint Encoder",
    coolingSystem: "Cooling System",
    powerSupply: "Power Supply",
    batteryCapacity: "Battery Capacity",
    wifiBluetooth: "Wi-Fi 6, Bluetooth 5.2",
    speaker: "Speaker",
    microphone: "Microphone",
    frontLight: "Front Light",
    wirelessVectorModule: "Wireless vector follow module",
    gps: "GPS",
    fourG: "4G",
    sensor: "Sensor",
    controlCompute: "Control & Compute",
    externalInterfaces: "External Interfaces",
  };

  const group3Labels = {
    operatingTemperature: "Operating Temperature",
    batteryLifeNoLoad: "Battery Life (No Load)",
    batteryLifeWithLoad: "Battery Life (with 25kg Load)",
    maxStandingLoad: "Max Standing Load",
    continuousWalkingLoad: "Continuous Walking Load",
    slopeWalkingCapability: "Slope Walking Capability",
    stairClimbingCapability: "Stair Climbing Capability",
    maxClimbHeight: "Max Climb Height",
    movingSpeed: "Speed",
    replaceWheelLeg: "Replace Wheel-leg",
    ingressProtectionRating: "Ingress Protection Rating",
  };

  const group4Labels = {
    smartOtaUpgrade: "Smart OTA Upgrade",
    secondaryDevelopment: "Secondary Development",
    warranty: "Warranty",
    continuousUpgrades: "Continuous Upgrades",
  };

  const allGroups = [
    { titleKey: "Mechanical", title: "Mechanical Parameters", items: group1Labels },
    { titleKey: "Electrical", title: "Electrical Characteristics", items: group2Labels },
    { titleKey: "Performance", title: "Performance Metrics", items: group3Labels },
    { titleKey: "Other", title: "Other", items: group4Labels },
  ];

  const alwaysShowGroups = ["Mechanical", "Electrical"];

  const renderGroup = (title: string, items: { [key: string]: string }) => {
    const entries = Object.entries(items);
    return (
      <>
        {entries.map(([key, label], idx) => (
          <tr
            key={key}
            className={idx % 2 === 0 ? "bg-gradient-to-r from-emerald-900/40 to-emerald-800/30" : "bg-gradient-to-r from-emerald-800/30 to-emerald-900/20"}
          >
            {idx === 0 && (
              <td
                rowSpan={entries.length}
                className="p-3 border-2 border-gray-800 text-center align-middle bg-transparent text-white"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </td>
            )}
            <td className="p-3 border-b border-emerald-500/10 hover:bg-emerald-500/5 transition-colors duration-150">{label}</td>
            {specifications.map((spec) => (
              <td key={spec.model + key} className="p-3 text-center border-b border-emerald-500/10 hover:bg-emerald-500/5 transition-colors duration-150">
                {spec[key as keyof H1Spec] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <h2 className="text-xl font-heading font-bold mb-4 text-center text-black dark:text-white">
            {translateHeading()}
          </h2>

          {specifications.map((spec) => (
            <div key={spec.model} className="mb-8">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/A2.webp"
                  alt={translateModel(spec.model)}
                  className="w-32 h-32 mb-2 object-contain"
                />
                <span className="font-bold text-black dark:text-white text-lg">
                  {translateModel(spec.model)}
                </span>
              </div>

              {allGroups.map(({ titleKey, title, items }) => {
                const hasData = Object.keys(items).some(
                  (key) =>
                    spec[key as keyof H1Spec] !== undefined &&
                    spec[key as keyof H1Spec] !== ""
                );
                if (!hasData) return null;

                if (!showMoreSpecs && !alwaysShowGroups.includes(titleKey)) {
                  return null;
                }

                return (
                  <div
                    key={titleKey}
                    className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/30 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-4 mb-4 shadow-lg"
                  >
                    <h3 className="text-lg font-subheading font-semibold mb-3 text-blue-400 border-b border-gray-700 pb-2">
                      {translateGroupTitle(titleKey, title)}
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(items).map(([key, label]) => {
                        const value = spec[key as keyof H1Spec];
                        if (!value || value === "") return null;
                        return (
                          <div
                            key={key}
                            className="flex justify-between items-start py-2 border-b border-gray-800 last:border-b-0"
                          >
                            <span className="text-gray-300 text-sm flex-1 pr-4">
                              {translateLabel(key, label)}
                            </span>
                            <span className="text-white text-sm font-medium text-right flex-1">
                              {value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Show More Button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setShowMoreSpecs((prev) => !prev)}
            >
              {translateButton(showMoreSpecs)}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Images above table */}
          <div className="flex mb-4">
            <div className="w-20" />
            <div className="w-64" />
            {specifications.map((spec) => (
              <div
                key={spec.model}
                className="flex-1 flex flex-col items-center px-2"
              >
                <img
                  src="/A2.webp"
                  alt={translateModel(spec.model)}
                  className="w-32 h-32 mb-2 object-contain"
                />
                <span className="font-bold text-black dark:text-white text-lg">
                  {spec.model}
                </span>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="border border-emerald-500/20 rounded-lg overflow-x-auto bg-black/40 backdrop-blur-sm shadow-xl shadow-emerald-500/10">
            <table className="w-full border-collapse min-w-[800px]">
              <tbody>
            {allGroups.map(({ titleKey, title, items }, idx) => {
              if (!showMoreSpecs && !alwaysShowGroups.includes(titleKey)) {
                return null;
              }
              return (
                <React.Fragment key={idx}>
                  {renderGroup(translateGroupTitle(titleKey, title), items)}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
          </div>

          {/* Show More Button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setShowMoreSpecs((prev) => !prev)}
            >
              {translateButton(showMoreSpecs)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A2ComparisonChart;
