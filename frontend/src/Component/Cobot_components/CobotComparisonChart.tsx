import React, { useState } from "react";

interface H1Spec {
  model?: string;
  // Mechanical Parameters
  sizeStandard?: string;
  sizeLyingProne?: string;
  material?: string;
  weightWithBattery?: string;
  // Electrical Characteristics
  supplyVoltage?: string;
  workingMaxPower?: string;
  // Performance Metrics
  payload?: string;
  speed?: string;
  maxClimbDropHeight?: string;
  maxClimbAngle?: string;
  basicComputingPower?: string;
  // Knee Joint Parameters
  maxJointTorqueKnee?: string;
  aluminumKneeJointMotor?: string;
  jointSetCount?: string;
  bodyRangeOfMotion?: string;
  thighRangeOfMotion?: string;
  shankRangeOfMotion?: string;
  intraJointCircuit?: string;
  jointHeatPipeCooler?: string;
  // Force Sensors Parameters
  superWideAngle3DLidar?: string;
  wirelessVectorPositioning?: string;
  hdWideAngleCamera?: string;
  footEndForceSensor?: string;
  // Feature List
  basicAction?: string;
  autoScalingStrap?: string;
  upgradedOTA?: string;
  rttPictures?: string;
  graphicalProgramming?: string;
  frontLamp?: string;
  wifi6?: string;
  bluetooth?: string;
  module4G?: string;
  voiceFunction?: string;
  iss2?: string;
  intelligentAvoidance?: string;
  chargingPileCompat?: string;
  secondaryDevelopment?: string;
  // Accessories
  manualController?: string;
  highComputingPowerModule?: string;
  smartBattery?: string;
  batteryLife?: string;
  charger?: string;
  warrantyPeriod?: string;
}

const CobotComparisonChart: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("Air");
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);

  const specifications: H1Spec[] = [
    {
      model: "Air",
      sizeStandard: "70×31×40cm",
      sizeLyingProne: "76×31×20cm",
      material: "Aluminium alloy + High strength engineering plastic",
      weightWithBattery: "About 15kg",
      supplyVoltage: "28V~33.6V",
      workingMaxPower: "About 3000W",
      payload: "≈7kg (MAX ~ 10kg)",
      speed: "0 ~ 2.5m/s",
      maxClimbDropHeight: "About 15cm",
      maxClimbAngle: "30°",
      basicComputingPower: "○",
      maxJointTorqueKnee: "○",
      aluminumKneeJointMotor: "12 set",
      jointSetCount: "12 set",
      bodyRangeOfMotion: "body: -48~48º",
      thighRangeOfMotion: "thigh: -200º~90º",
      shankRangeOfMotion: "shank: -156º~-48º",
      intraJointCircuit: "●",
      jointHeatPipeCooler: "●",
      superWideAngle3DLidar: "●",
      wirelessVectorPositioning: "○",
      hdWideAngleCamera: "●",
      footEndForceSensor: "○",
      basicAction: "●",
      autoScalingStrap: "○",
      upgradedOTA: "●",
      rttPictures: "●",
      graphicalProgramming: "●",
      frontLamp: "●",
      wifi6: "●",
      bluetooth: "●",
      module4G: "○",
      voiceFunction: "○",
      iss2: "○",
      intelligentAvoidance: "●",
      chargingPileCompat: "○",
      secondaryDevelopment: "○",
      manualController: "optional",
      highComputingPowerModule: "○",
      smartBattery: "standard (8000mAh)",
      batteryLife: "About 1–2h",
      charger: "standard (33.6V 3.5A)",
      warrantyPeriod: "6 months",
    },
    {
      model: "Pro",
      sizeStandard: "70×31×40cm",
      sizeLyingProne: "76×31×20cm",
      material: "Aluminium alloy + High strength engineering plastic",
      weightWithBattery: "About 15kg",
      supplyVoltage: "28V~33.6V",
      workingMaxPower: "About 3000W",
      payload: "≈8kg (MAX ~ 10kg)",
      speed: "0 ~ 3.5m/s",
      maxClimbDropHeight: "About 16cm",
      maxClimbAngle: "40°",
      basicComputingPower: "8-core High-performance CPU[4]",
      maxJointTorqueKnee: "About 45N.m",
      aluminumKneeJointMotor: "12 set",
      jointSetCount: "12 set",
      bodyRangeOfMotion: "body: -48~48º",
      thighRangeOfMotion: "thigh: -200º~90º",
      shankRangeOfMotion: "shank: -156º~-48º",
      intraJointCircuit: "●",
      jointHeatPipeCooler: "●",
      superWideAngle3DLidar: "●",
      wirelessVectorPositioning: "●",
      hdWideAngleCamera: "●",
      footEndForceSensor: "○",
      basicAction: "●",
      autoScalingStrap: "●",
      upgradedOTA: "●",
      rttPictures: "●",
      graphicalProgramming: "●",
      frontLamp: "●",
      wifi6: "●",
      bluetooth: "●",
      module4G: "●",
      voiceFunction: "●",
      iss2: "●",
      intelligentAvoidance: "●",
      chargingPileCompat: "○",
      secondaryDevelopment: "○",
      manualController: "optional",
      highComputingPowerModule: "○",
      smartBattery: "standard (8000mAh)",
      batteryLife: "About 1–2h",
      charger: "standard (33.6V 3.5A)",
      warrantyPeriod: "12 months",
    },
    {
      model: "Edu",
      sizeStandard: "70×31×40cm",
      sizeLyingProne: "76×31×20cm",
      material: "Aluminium alloy + High strength engineering plastic",
      weightWithBattery: "About 15kg",
      supplyVoltage: "28V~33.6V",
      workingMaxPower: "About 3000W",
      payload: "≈8kg (MAX ~ 12kg)",
      speed: "0 ~ 3.7m/s (MAX ~ 5m/s)",
      maxClimbDropHeight: "About 16cm",
      maxClimbAngle: "40°",
      basicComputingPower: "8-core High-performance CPU",
      maxJointTorqueKnee: "About 45N.m",
      aluminumKneeJointMotor: "12 set",
      jointSetCount: "12 set",
      bodyRangeOfMotion: "body: -48~48º",
      thighRangeOfMotion: "thigh: -200º~90º",
      shankRangeOfMotion: "shank: -156º~-48º",
      intraJointCircuit: "●",
      jointHeatPipeCooler: "●",
      superWideAngle3DLidar: "●",
      wirelessVectorPositioning: "●",
      hdWideAngleCamera: "●",
      footEndForceSensor: "●",
      basicAction: "●",
      autoScalingStrap: "○",
      upgradedOTA: "●",
      rttPictures: "●",
      graphicalProgramming: "●",
      frontLamp: "●",
      wifi6: "●",
      bluetooth: "●",
      module4G: "●",
      voiceFunction: "●",
      iss2: "●",
      intelligentAvoidance: "●",
      chargingPileCompat: "○",
      secondaryDevelopment: "○",
      manualController: "●",
      highComputingPowerModule: "NVIDIA Jetson Orin (optional) (40-100Tops computing power)",
      smartBattery: "long endurance (15000mAh)",
      batteryLife: "About 2–4h",
      charger: "fast charge (33.6V 9A)",
      warrantyPeriod: "12 months",
    }
  ];

  const groupLabels: Record<string, Record<string, string>> = {
    "Mechanical Specifications": {
      sizeStandard: "Dimension of standing",
      sizeLyingProne: "Dimension of crouching",
      weightWithBattery: "Weight (with battery)",
      material: "Material",
    },
    "Electron Parameters": {
      supplyVoltage: "Voltage",
      workingMaxPower: "Working maximum power",
    },
    "Performance Parameters": {
      payload: "Payload",
      speed: "Speed",
      maxClimbDropHeight: "Max Climb Drop Height",
      maxClimbAngle: "Max Climb Angle",
      basicComputingPower: "Basic Computing Power",
    },
    "Knee Joint Parameters": {
      maxJointTorqueKnee: "Max joint Torque[1]",
      aluminumKneeJointMotor: "Aluminum knee joint motor",
      jointSetCount: "Joint set count",
      bodyRangeOfMotion: "Body range of motion",
      thighRangeOfMotion: "Thigh range of motion",
      shankRangeOfMotion: "Shank range of motion",
      intraJointCircuit: "Intra-joint circuit",
      jointHeatPipeCooler: "Joint Heat Pipe Cooler",
    },
    "Force Sensors Parameters": {
      superWideAngle3DLidar: "Super-wide-angle 3D LiDAR",
      wirelessVectorPositioning: "Wireless Vector Positioning",
      hdWideAngleCamera: "HD Wide-angle Camera",
      footEndForceSensor: "Foot-end force sensor",
    },
    "Feature List": {
      basicAction: "Basic Action",
      autoScalingStrap: "Auto-scaling strap",
      upgradedOTA: "Upgraded Intelligent OTA",
      rttPictures: "RTT 2.0 Pictures Transmission",
      graphicalProgramming: "Graphical programme",
      frontLamp: "Front lamp",
      wifi6: "Wi-Fi 6 with Dual-band",
      bluetooth: "Bluetooth 5.2/4.2/2.1",
      module4G: "4G module",
      voiceFunction: "Voice Function",
      iss2: "ISS 2.0 Intelligent side-follow system",
      intelligentAvoidance: "Intelligent detection and avoidance",
      chargingPileCompat: "Charging Pile Compatibility",
      secondaryDevelopment: "Secondary development",
    },
    "Accessories": {
      manualController: "Manual controller",
      highComputingPowerModule: "High computing power module",
      smartBattery: "Smart battery",
      batteryLife: "Battery life",
      charger: "Charger",
      warrantyPeriod: "Warranty period",
    }
  };

  const allGroups = Object.entries(groupLabels);

  const getImageForModel = (model: string) => {
    switch (model) {
      case "Air": return "/media/GO2 AIR.png";
      case "Pro": return "/media/GO2 PRO.png";
      case "Edu": return "/media/GO2 EDU U1.png";
      default: return "/media/GO2 AIR.png";
    }
  };

  const renderGroup = (title: string, items: any) => {
    const keys = Object.keys(items);
    return (
      <React.Fragment key={title}>
        {keys.map((key, idx) => (
          <tr key={key} className={idx % 2 === 0 ? "bg-gradient-to-r from-emerald-900/40 to-emerald-800/30" : "bg-gradient-to-r from-emerald-800/30 to-emerald-900/20"}>
            {idx === 0 && (
              <td
                rowSpan={keys.length}
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
            <td className="p-3 border-b border-emerald-500/10 hover:bg-emerald-500/5 transition-colors duration-150">{items[key]}</td>
            {specifications.map((spec) => (
              <td key={spec.model + key} className="p-3 text-center">
                {spec[key as keyof H1Spec] || "-"}
              </td>
            ))}
          </tr>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-white p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-white">
            GO2 Comparison
          </h2>
          {/* Model Selector */}
          <div className="flex justify-center space-x-2 mb-4">
            {specifications.map((spec) => (
              <button
                key={spec.model}
                onClick={() => setSelectedModel(spec.model!)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedModel === spec.model
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {spec.model}
              </button>
            ))}
          </div>

          {/* Selected Model Display */}
          <div className="text-center mb-6">
            <img
              src={getImageForModel(selectedModel)}
              alt={selectedModel}
              className="w-32 h-32 mx-auto mb-2 object-contain"
            />
            <h3 className="text-lg font-bold text-black dark:text-white">{selectedModel}</h3>
          </div>

          {/* Groups */}
          <div className="space-y-4">
            {allGroups.map(([title, items], _idx) => {
              const selectedSpec = specifications.find(s => s.model === selectedModel);
              const hasData = Object.keys(items).some(key =>
                selectedSpec?.[key as keyof H1Spec] && selectedSpec[key as keyof H1Spec] !== ""
              );

              if (!hasData) return null;

              // show only up to Knee Joint if showMore is false
              const alwaysShowGroups = ["Mechanical Specifications", "Electron Parameters", "Performance Parameters", "Knee Joint Parameters"];
              if (!showMoreSpecs && !alwaysShowGroups.includes(title)) {
                return null;
              }

              return (
                <div key={title} className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/30 rounded-lg p-4 border border-emerald-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400 border-b border-emerald-500/30 pb-2">
                    {title}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(items).map(([key, label]) => {
                      const value = selectedSpec?.[key as keyof H1Spec];
                      if (!value || value === "") return null;

                      return (
                        <div key={key} className="flex justify-between items-start py-2 border-b border-emerald-500/20 last:border-b-0">
                          <span className="text-emerald-200 text-sm flex-1 pr-4">{label}</span>
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

          {/* Show More Button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setShowMoreSpecs(prev => !prev)}
            >
              {showMoreSpecs ? "Show Less Specifications" : "Show More Specifications"}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Images */}
          <div className="flex mb-4">
            <div className="w-20" />
            <div className="w-64" />
            {specifications.map((spec) => (
              <div key={spec.model} className="flex-1 flex flex-col items-center px-2">
                <img
                  src={getImageForModel(spec.model!)}
                  alt={spec.model}
                  className="w-48 h-48 mb-2 object-contain"
                />
                <span className="font-bold text-black dark:text-white text-lg">{spec.model}</span>
              </div>
            ))}
          </div>

          <div className="border border-emerald-500/20 rounded-lg overflow-x-auto bg-black/40 backdrop-blur-sm shadow-xl shadow-emerald-500/10">
            <table className="w-full border-collapse min-w-[800px]">
              <tbody>
                {allGroups.map(([grp, items]) => {
                  const alwaysShowGroups = ["Mechanical Specifications", "Electron Parameters", "Performance Parameters", "Knee Joint Parameters"];
                  if (!showMoreSpecs && !alwaysShowGroups.includes(grp)) {
                    return null;
                  }
                  return renderGroup(grp, items);
                })}
              </tbody>
            </table>
          </div>

          {/* Show More Button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setShowMoreSpecs(prev => !prev)}
            >
              {showMoreSpecs ? "Show Less Specifications" : "Show More Specifications"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CobotComparisonChart;
