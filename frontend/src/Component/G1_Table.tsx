import React, { useState } from "react";

interface RobotSpec {
  model: string;
  standingDimensions: string;
  foldingDimensions: string;
  weightWithBattery: string;
  totalDegreesOfFreedom: string;
  singleLegDegreesOfFreedom: string;
  waistDegreesOfFreedom: string;
  singleArmDegreesOfFreedom: string;
  singleHandDegreesOfFreedom: string;
  jointOutputBearing: string;
  jointMotor: string;
  maximumTorqueKneeJoint: string;
  armMaximumLoad: string;
  calfThighLength: string;
  armSpan: string;
  extraLargeJointMovementSpace: string;
  fullJointHollowElectricalRouting: string;
  jointEncoder: string;
  coolingSystem: string;
  powerSupply: string;
  basicComputingPower: string;
  sensingSensor: string;
  fourMicrophoneArray: string;
  fiveWSpeaker: string;
  wifiBluetooth: string;
  highComputingPowerModule: string;
  smartBattery: string;
  charger: string;
  manualController: string;
  batteryLife: string;
  upgradedIntelligentOTA: string;
  secondaryDevelopment: string;
  warrantyPeriod: string;
  price: string;
}

const RoboticsComparisonChart: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("G1");
  const [showMoreSensors, setShowMoreSensors] = useState(false);
  
  const specifications: RobotSpec[] = [
    {
      model: "G1",
      standingDimensions: "1320x450x200mm",
      foldingDimensions: "690x450x300mm",
      weightWithBattery: "About 35kg",
      totalDegreesOfFreedom: "23",
      singleLegDegreesOfFreedom: "6",
      waistDegreesOfFreedom: "1",
      singleArmDegreesOfFreedom: "5",
      singleHandDegreesOfFreedom: "/",
      jointOutputBearing: "Industrial grade crossed roller bearings (high precision, high load capacity)",
      jointMotor: "Low inertia high-speed internal rotor PMSM(permanent magnet synchronous motor,better response speed and heat dissipation)",
      maximumTorqueKneeJoint: "90N.m",
      armMaximumLoad: "About 2Kg",
      calfThighLength: "0.6M",
      armSpan: "About 0.45M",
      extraLargeJointMovementSpace: "Waist joint：Z±155°\nKnee joint：0~165°\nHip joint：P±154°、R-30~+170°、Y±158°",
      fullJointHollowElectricalRouting: "YES",
      jointEncoder: "Dual encoder",
      coolingSystem: "Local air cooling",
      powerSupply: "13 string lithium battery",
      basicComputingPower: "8-core high-performance CPU",
      sensingSensor: "Depth Camera+3D LiDAR",
      fourMicrophoneArray: "YES",
      fiveWSpeaker: "YES",
      wifiBluetooth: "YES",
      highComputingPowerModule: "/",
      smartBattery: "9000mAh",
      charger: "54V 5A",
      manualController: "YES",
      batteryLife: "About 2h",
      upgradedIntelligentOTA: "YES",
      secondaryDevelopment: "/",
      warrantyPeriod: "8 months",
      price: "US $16K",
    },
    {
      model: "G1 EDU",
      standingDimensions: "1320x450x200mm",
      foldingDimensions: "690x450x300mm",
      weightWithBattery: "About 35kg+",
      totalDegreesOfFreedom: "23 - 43",
      singleLegDegreesOfFreedom: "6",
      waistDegreesOfFreedom: "1+(Optional 2 additional waist degrees of freedom)",
      singleArmDegreesOfFreedom: "5",
      singleHandDegreesOfFreedom: "7（Optional Force control of three-fingered hand）+2(Optional 2 additional wrist degrees of freedom)",
      jointOutputBearing: "Industrial grade crossed roller bearings (high precision, high load capacity)",
      jointMotor: "Low inertia high-speed internal rotor PMSM(permanent magnet synchronous motor,better response speed and heat dissipation)",
      maximumTorqueKneeJoint: "120N.m",
      armMaximumLoad: "About 3Kg",
      calfThighLength: "0.6M",
      armSpan: "About 0.45M",
      extraLargeJointMovementSpace: "Waist joint：Z±155°、X±45°、Y±30°\nKnee joint：0~165°\nHip joint：P±154°、R-30~+170°、Y±158°\nWrist joint：P±92.5°、Y±92.5°",
      fullJointHollowElectricalRouting: "YES",
      jointEncoder: "Dual encoder",
      coolingSystem: "Local air cooling",
      powerSupply: "13 string lithium battery",
      basicComputingPower: "8-core high-performance CPU",
      sensingSensor: "Depth Camera+3D LiDAR",
      fourMicrophoneArray: "YES",
      fiveWSpeaker: "YES",
      wifiBluetooth: "YES",
      highComputingPowerModule: "NVIDIA Jetson Orin",
      smartBattery: "9000mAh",
      charger: "54V 5A",
      manualController: "YES",
      batteryLife: "About 2h",
      upgradedIntelligentOTA: "YES",
      secondaryDevelopment: "YES",
      warrantyPeriod: "18 months",
      price: "Contact sales",
    },
  ];

  // Group 1: Mechanical Dimensions (15 rows)
  const group1Labels = {
    standingDimensions: "Height, Width and Thickness（Stand）",
    foldingDimensions: "Height, Width and Thickness（Fold）",
    weightWithBattery: "Weight (With Battery)",
    totalDegreesOfFreedom: "Total Degrees of Freedom（Joint Freedom）",
    singleLegDegreesOfFreedom: "Single Leg Degrees of Freedom",
    waistDegreesOfFreedom: "Waist Degrees of Freedom",
    singleArmDegreesOfFreedom: "Single Arm Degrees of Freedom",
    singleHandDegreesOfFreedom: "Single Hand Degrees of Freedom",
    jointOutputBearing: "Joint output bearing",
    jointMotor: "Joint motor",
    maximumTorqueKneeJoint: "Maximum Torque of Knee Joint【1】",
    armMaximumLoad: "Arm Maximum Load【2】",
    calfThighLength: "Calf + Thigh Length",
    armSpan: "Arm Span",
    extraLargeJointMovementSpace: "Extra Large Joint Movement Space",
  };

  // Group 2: Degrees of Freedom
//   const group2Labels = {
//     totalDegreesOfFreedom: "Total Degrees of Freedom（Joint Freedom）",
//     singleLegDegreesOfFreedom: "Single Leg Degrees of Freedom",
//     waistDegreesOfFreedom: "Waist Degrees of Freedom",
//     singleArmDegreesOfFreedom: "Single Arm Degrees of Freedom",
//     singleHandDegreesOfFreedom: "Single Hand Degrees of Freedom",
//   };

  // Group 3: Joint & Performance
//   const group3Labels = {
//     jointOutputBearing: "Joint output bearing",
//     jointMotor: "Joint motor",
//     maximumTorqueKneeJoint: "Maximum Torque of Knee Joint【1】",
//     armMaximumLoad: "Arm Maximum Load【2】",
//     calfThighLength: "Calf + Thigh Length",
//     armSpan: "Arm Span",
//     extraLargeJointMovementSpace: "Extra Large Joint Movement Space",
//   };

  // Group 4: Electrical Characteristics (9 rows)
  const group4Labels = {
    fullJointHollowElectricalRouting: "Full Joint Hollow Electrical Routing",
    jointEncoder: "Joint Encoder",
    coolingSystem: "Cooling System",
    powerSupply: "Power Supply",
    basicComputingPower: "Basic Computing Power",
    sensingSensor: "Sensing Sensor",
    fourMicrophoneArray: "4 Microphone Array",
    fiveWSpeaker: "5W Speaker",
    wifiBluetooth: "WiFi 6 、Bluetooth 5.2",
  };

  // Group 5: Sensing
//   const group5Labels = {
//     sensingSensor: "Sensing Sensor",
//     fourMicrophoneArray: "4 Microphone Array",
//     fiveWSpeaker: "5W Speaker",
//     wifiBluetooth: "WiFi 6 、Bluetooth 5.2",
//   };

  // Group 6: Accessories (4 rows)
  const group6Labels = {
    highComputingPowerModule: "High Computing Power Module",
    smartBattery: "Smart Battery (Quick Release)",
    charger: "Charger",
    manualController: "Manual Controller",
  };

  // Group 7: Other (5 rows)
  const group7Labels = {
    batteryLife: "Battery Life",
    upgradedIntelligentOTA: "Upgraded Intelligent OTA",
    secondaryDevelopment: "Secondary Development【3】",
    warrantyPeriod: "Warranty Period【4】",
    price: "Price(Tax and Shipping cost excluded)",
  };

  // Group 8: (removed)

  // All groups for mobile rendering
  const allGroups = [
    { title: "Mechanical Dimensions", items: group1Labels, isBoolean: false },
    { title: "Electrical Characteristics", items: group4Labels, isBoolean: false },
    { title: "Accessories", items: group6Labels, isBoolean: false },
    { title: "Other", items: group7Labels, isBoolean: false },
  ];

  const getImageForModel = (model: string) => {
    switch (model) {
      case "G1": return "/media/G1 front.png";
      case "G1 EDU": return "/media/G1 EDU U6 .png";
      default: return "/media/Robot_hero.svg";
    }
  };




  const renderGroup = (
    groupIndex: string,
    _groupLabel: string,
    items: { [key: string]: string },
    _isBoolean = false,
    customRowSpan?: number,
    customColSpan?: number
  ) => {
    const entries = Object.entries(items);
    const rowSpanValue = customRowSpan || entries.length;
    const colSpanValue = customColSpan || 1;
    
    return (
      <>
        {entries.map(([key, label], idx) => (
          <tr key={key} className={idx % 2 === 0 ? "bg-gradient-to-r from-emerald-900/40 to-emerald-800/30" : "bg-gradient-to-r from-emerald-800/30 to-emerald-900/20"}>
            {idx === 0 ? (
              <td 
                rowSpan={rowSpanValue} 
                colSpan={colSpanValue}
                className="p-3 border-r-2 border-emerald-500/20 text-center align-middle rounded-xx mx-4 bg-gradient-to-b from-emerald-900/50 to-emerald-800/30"
                style={{ 
                  backgroundColor: 'transparent',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(360deg)',
                  whiteSpace: 'nowrap',
                  color: 'white',
                  margin: '8px 16px',
                }}
              >
                {groupIndex}
              </td>
            ) : null}
            <td className="p-3">{label}</td>
            {specifications.map((spec) => (
              <td key={spec.model} className="p-3 text-center">
                {key === "extraLargeJointMovementSpace" ? (
                  <div className="text-sm">
                    {(spec[key as keyof RobotSpec] as string).split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                ) : (
                  spec[key as keyof RobotSpec] as string
                )}
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
          {/* Mobile Model Selector */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-center">Robot Comparison</h2>
            <div className="flex justify-center space-x-2 mb-4">
              {specifications.map((spec) => (
                <button
                  key={spec.model}
                  onClick={() => setSelectedModel(spec.model)}
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
                alt={`${selectedModel} Robot`} 
                className="w-24 h-24 mx-auto mb-2 object-contain"
              />
              <h3 className="text-lg font-bold">{selectedModel}</h3>
            </div>
          </div>

          {/* Mobile Specifications */}
          <div className="space-y-4">
            {allGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/30 rounded-lg p-4 border border-emerald-500/20">
                <h3 className="text-lg font-semibold mb-3 text-emerald-400 border-b border-emerald-500/30 pb-2">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {Object.entries(group.items).map(([key, label]) => {
                    const selectedSpec = specifications.find(s => s.model === selectedModel);
                    const value = selectedSpec?.[key as keyof RobotSpec];
                    
                    return (
                      <div key={key} className="flex justify-between items-start py-2 border-b border-emerald-500/20 last:border-b-0">
                        <span className="text-emerald-200 text-sm flex-1 pr-4">{label}</span>
                        <span className="text-white text-sm font-medium text-right flex-1">
                          {key === "extraLargeJointMovementSpace" ? (
                            <div className="text-sm text-left">
                              {(value as string).split('\n').map((line, idx) => (
                                <div key={idx}>{line}</div>
                              ))}
                            </div>
                          ) : (
                            value as string
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Table with horizontal scroll */}
          <div className="border border-emerald-500/20 rounded-lg overflow-x-auto bg-black/40 backdrop-blur-sm shadow-xl shadow-emerald-500/10">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th colSpan={2} className="p-3"></th>
                  <th colSpan={1} className="p-3">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img 
                          src="/media/G1 front.png" 
                          alt="G1 Robot" 
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                      <span className="font-bold text-white text-sm mt-2">G1</span>
                    </div>
                  </th>
                  <th colSpan={1} className="p-3">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-32 h-32 flex items-center justify-center">
                        <img 
                          src="/media/G1 EDU U6 .png" 
                          alt="G1 EDU Robot" 
                          className="w-28 h-28 object-contain"
                        />
                      </div>
                      <span className="font-bold text-white text-sm mt-2">G1 EDU</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Render all groups based on allGroups array */}
                {allGroups.map((group) => (
                  renderGroup(group.title, group.title, group.items, group.isBoolean)
                ))}
              </tbody>
            </table>
            
          </div>
          {/* Show More Button outside the table, right side, at the bottom */}
            <div className="flex justify-end mt-4 mr-4 mb-4">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
                onClick={() => setShowMoreSensors((prev) => !prev)}
              >
                {showMoreSensors ? "Hide More" : "Show More Specifications"}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsComparisonChart;