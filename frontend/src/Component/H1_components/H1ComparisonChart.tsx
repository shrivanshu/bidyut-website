import React, { useState } from "react";

interface H1Spec {
  model: string;
  keyDimensions: string;
  thighCalfLength: string;
  totalArmLength: string;
  dofEachLeg: string;
  dofEachArm: string;
  totalWeight: string;
  jointOutputBearing: string;
  coreJointMotor: string;
  kneeTorque: string;
  hipTorque: string;
  ankleTorque: string;
  armJointTorque: string;
  movingSpeed: string;
  batteryCapacity: string;
  maxVoltage: string;
  computingPower: string;
  sensorConfiguration: string;
  dexterousHand: string;
  shoulderTorque: string;
  elbowTorque: string;
  wristTorque: string;
  armNormalLoadPeak: string;
  armNormalLoadRated: string;
  waistTorque: string;
}

const H1ComparisonChart: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("H1");
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);
  
  const specifications: H1Spec[] = [
    {
      model: "H1",
      keyDimensions: "(1520+285)mm × 570mm × 220mm",
      thighCalfLength: "400mm × 2",
      totalArmLength: "338mm × 2",
      dofEachLeg: "5 (Hip × 3 + Knee × 1 + Ankle × 1)",
      dofEachArm: "4 (Expandable)",
      totalWeight: "About 47kg",
      jointOutputBearing: "Industrial grade crossed roller bearings (high precision, high load capacity)",
      coreJointMotor: "Low inertia high-speed internal rotor PMSM (better response speed and heat dissipation)",
      kneeTorque: "About 360N.m",
      hipTorque: "About 220N.m",
      ankleTorque: "About 59N.m",
      armJointTorque: "About 75N.m",
      movingSpeed: "3.3m/s (world record), Potential mobility > 5m/s",
      batteryCapacity: "15Ah (0.864KWh)",
      maxVoltage: "67.2V",
      computingPower: "Standard: Intel Core i5 (Platform Function), Intel Core i7 (User Development). Optional: Intel Core i7 or Nvidia Jetson Orin NX",
      sensorConfiguration: "3D LIDAR + Depth Camera",
      dexterousHand: "Optional",
      shoulderTorque: "",
      elbowTorque: "",
      wristTorque: "",
      armNormalLoadPeak: "",
      armNormalLoadRated: "",
      waistTorque: "",
    },
    {
      model: "H1-2",
      keyDimensions: "(1503+285)mm × 510mm × 287mm",
      thighCalfLength: "400mm × 2",
      totalArmLength: "685mm",
      dofEachLeg: "6 (Hip × 3 + Knee × 1 + Ankle × 2)",
      dofEachArm: "7 (Shoulder × 3 + Elbow × 1 + Wrist × 3)",
      totalWeight: "About 70kg",
      jointOutputBearing: "Industrial grade crossed roller bearings (high precision, high load capacity)",
      coreJointMotor: "Low inertia high-speed internal rotor PMSM (better response speed and heat dissipation)",
      kneeTorque: "About 360N.m",
      hipTorque: "About 220N.m",
      waistTorque: "About 220N.m",
      ankleTorque: "About 75x2N.m",
      movingSpeed: "<2m/s",
      batteryCapacity: "15Ah (0.864KWh)",
      maxVoltage: "67.2V",
      computingPower: "Standard: Intel Core i5 (Platform Function), Intel Core i7 (User Development). Optional: Intel Core i7 or Nvidia Jetson Orin NX (up to three)",
      sensorConfiguration: "3D LIDAR + Depth Camera",
      dexterousHand: "Optional Dex5-1 or other ambidextrous hands",
      shoulderTorque: "About 120N.m",
      elbowTorque: "About 120N.m",
      wristTorque: "About 30N.m",
      armJointTorque: "",
      armNormalLoadPeak: "About 21Kg",
      armNormalLoadRated: "About 7Kg",
    },
  ];

  // Group 1: Physical Dimensions (5 items)
  const group1Labels = {
    keyDimensions: "Key Dimensions",
    thighCalfLength: "Thigh and Calf Length",
    totalArmLength: "Total Arm Length",
    dofEachLeg: "DOF of Each Leg",
    dofEachArm: "DOF of Each Arm",
    totalWeight: "Total Weight",
  };

  // Group 2: Joint Specifications (2 items)
  const group2Labels = {
    jointOutputBearing: "Joint Output Bearing",
    coreJointMotor: "Core Joint Motor",
  };

  // Group 3: Performance Specifications (7 items)
  const group3Labels = {
    kneeTorque: "Knee Torque",
    hipTorque: "Hip Joint Torque",
    waistTorque: "Waist Joint Torque",
    ankleTorque: "Ankle Torque",
    armJointTorque: "Arm Joint Torque",
    movingSpeed: "Moving Speed",
  };

  // Group 4: Power & Computing (3 items)
  const group4Labels = {
    batteryCapacity: "Battery Capacity",
    maxVoltage: "Max Voltage",
    computingPower: "Control and Perception Computing Power",
  };

  // Group 5: Sensors & Accessories (2 items)
  const group5Labels = {
    sensorConfiguration: "Sensor Configuration",
    dexterousHand: "Dexterous Hand",
  };

  // Group 6: H1-2 Specific Arm Specifications (5 items)
  const group6Labels = {
    shoulderTorque: "Shoulder Torque",
    elbowTorque: "Elbow Torque",
    wristTorque: "Wrist Torque",
    armNormalLoadPeak: "Arm Normal Load (Peak)",
    armNormalLoadRated: "Arm Normal Load (Rated)",
  };

  // All groups for mobile rendering
  const allGroups = [
    { title: "Physical Dimensions", items: group1Labels },
    { title: "Joint Specifications", items: group2Labels },
    { title: "Performance Specifications", items: group3Labels },
    { title: "Power & Computing", items: group4Labels },
    { title: "Sensors & Accessories", items: group5Labels },
    { title: "Arm Specifications (H1-2)", items: group6Labels },
  ];

  const getImageForModel = (model: string) => {
    switch (model) {
      case "H1": return "/media/H1.png";
      case "H1-2": return "/media/H1 - 2.png";
      default: return "/media/H1.png";
    }
  };

  const renderGroup = (
    groupIndex: string,
    items: { [key: string]: string },
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
                className="p-3 border-r-2 border-emerald-500/20 text-center align-middle bg-gradient-to-b from-emerald-900/50 to-emerald-800/30"
                style={{
                  backgroundColor: 'transparent',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(360deg)',
                  whiteSpace: 'nowrap',
                  color: 'white',
                }}
              >
                {groupIndex}
              </td>
            ) : null}
            <td className="p-3 border-b border-emerald-500/10 hover:bg-emerald-500/5 transition-colors duration-150">{label}</td>
            {specifications.map((spec) => (
              <td key={spec.model} className="p-3 text-center">
                {/* Always render a cell, show '-' if missing */}
                {spec[key as keyof H1Spec] !== undefined && spec[key as keyof H1Spec] !== ""
                  ? spec[key as keyof H1Spec]
                  : "-"}
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
            <h2 className="text-xl font-bold mb-4 text-center text-black dark:text-white">H1 Series Comparison</h2>
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
                className="w-32 h-32 mx-auto mb-2 object-contain"
              />
              <h3 className="text-lg font-bold text-black dark:text-white">{selectedModel}</h3>
            </div>
          </div>

          {/* Mobile Specifications */}
          <div className="space-y-4">
            {allGroups.map((group, groupIndex) => {
              const selectedSpec = specifications.find(s => s.model === selectedModel);
              const hasData = Object.keys(group.items).some(key => 
                selectedSpec?.[key as keyof H1Spec] && selectedSpec[key as keyof H1Spec] !== ""
              );
              
              if (!hasData) return null;
              
              return (
                <div key={groupIndex} className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/30 rounded-lg p-4 border border-emerald-500/20">
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400 border-b border-emerald-500/30 pb-2">
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(group.items).map(([key, label]) => {
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Images positioned above the table */}
          <div className="flex mb-4">
            <div className="w-20"></div> {/* Spacer for index column */}
            <div className="w-64"></div> {/* Spacer for specifications column */}
            <div className="flex-1 flex flex-col items-center px-2">
              <img 
                src="/media/H1.png" 
                alt="H1 Robot" 
                className="w-32 h-32 mb-2 object-contain"
              />
              <span className="font-bold text-black dark:text-white text-lg">H1</span>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <img 
                src="/media/H1 - 2.png" 
                alt="H1-2 Robot" 
                className="w-32 h-32 mb-2 object-contain"
              />
              <span className="font-bold text-black dark:text-white text-lg">H1-2</span>
            </div>
          </div>
          
          {/* Desktop Table with horizontal scroll */}
          <div className="border border-emerald-500/20 rounded-lg overflow-x-auto bg-black/40 backdrop-blur-sm shadow-xl shadow-emerald-500/10">
            <table className="w-full border-collapse min-w-[800px]">
              <tbody>
                {/* Group 1: Physical Dimensions */}
                {renderGroup("Physical Dimensions", group1Labels)}

                {/* Group 2: Joint Specifications */}
                {renderGroup("Joint Specifications", group2Labels)}

                {/* Group 3: Performance Specifications */}
                {renderGroup("Performance Specifications", group3Labels)}

                {/* Group 4: Power & Computing */}
                {renderGroup("Power & Computing", group4Labels)}

                {/* Group 5: Sensors & Accessories */}
                {renderGroup("Sensors & Accessories", group5Labels)}

                {/* Group 6: H1-2 Specific Arm Specifications - only show if showMoreSpecs is true */}
                {showMoreSpecs && renderGroup("Arm Specifications", group6Labels)}
              </tbody>
            </table>
          </div>
          
          {/* Show More Button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-green-700 transition"
              onClick={() => setShowMoreSpecs((prev) => !prev)}
            >
              {showMoreSpecs ? "Show Less" : "Show More Specifications"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H1ComparisonChart;