import React, { useState } from "react";

interface RobotSpec {
  model: string;
  standingDimensions: string;
  crouchingDimensions: string;
  weight: string;
  material: string;
  voltage: string;
  peakingCapacity: string;
  payload: string;
  speed: string;
  maxClimbDropHeight: string;
  maxClimbAngle: string;
  basicComputingPower: string;
  maxTorque: string;
  jointMotor: string;
  rangeOfMotion: { body: string; thigh: string; shank: string };
  intraJointCircuitLines: boolean;
  jointHeatPipeCooler: boolean;
  superWideAngle3DLidar: boolean;
  wirelessVectorPositioningTracking: boolean;
  hdWideAngleCamera: boolean;
  footAndNosesensor: boolean;
  basicAction: boolean;
  authenticatedWrap: boolean;
  upgradedIntelligencePla: boolean;
  http24ImageTransmission: boolean;
  graphicsProgram: boolean;
  frontLamp: boolean;
  wifiWithDualBand: boolean;
  bluetooth: boolean;
  fourGModule: boolean;
  voiceFunctions: boolean;
  ios20IntelligentSafeFollow: boolean;
  intelligentDetectionAndAvoidance: boolean;
  chargingPileCompatibility: boolean;
  secondaryDevelopment: boolean;
  manualController: string;
  highComputingPowerModule: string;
  smartBattery: string;
  batteryLife: string;
  charger: string;
  warrantyPeriod: string;
}

const RoboticsComparisonChart: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("AIR");
  const [showMoreSensors, setShowMoreSensors] = useState(false);
  
  const specifications: RobotSpec[] = [
    {
      model: "AIR",
      standingDimensions: "70×31×40cm",
      crouchingDimensions: "76×31×20cm",
      weight: "About 15kg",
      material: "Aluminum alloy + High strength engineering plastic",
      voltage: "28V~33.6V",
      peakingCapacity: "About3000W",
      payload: "≈7kg (MAX = 10kg)",
      speed: "0 ~ 2.5m/s",
      maxClimbDropHeight: "About15cm",
      maxClimbAngle: "30°",
      basicComputingPower: "○",
      maxTorque: "○",
      jointMotor: "12set",
      rangeOfMotion: { body: "-48°~48°", thigh: "-200°~90°", shank: "-156°~48°" },
      intraJointCircuitLines: true,
      jointHeatPipeCooler: true,
      superWideAngle3DLidar: true,
      wirelessVectorPositioningTracking: false,
      hdWideAngleCamera: true,
      footAndNosesensor: false,
      basicAction: true,
      authenticatedWrap: true,
      upgradedIntelligencePla: true,
      http24ImageTransmission: true,
      graphicsProgram: true,
      frontLamp: true,
      wifiWithDualBand: true,
      bluetooth: true,
      fourGModule: true,
      voiceFunctions: false,
      ios20IntelligentSafeFollow: true,
      intelligentDetectionAndAvoidance: true,
      chargingPileCompatibility: false,
      secondaryDevelopment: false,
      manualController: "optional",
      highComputingPowerModule: "○",
      smartBattery: "standard (8000mAh)",
      batteryLife: "About1~2h",
      charger: "standard (33.6V 3.5A)",
      warrantyPeriod: "6 months",
    },
    {
      model: "PRO",
      standingDimensions: "70×31×40cm",
      crouchingDimensions: "76×31×20cm",
      weight: "About 15kg",
      material: "Aluminum alloy + High strength engineering plastic",
      voltage: "28V~33.6V",
      peakingCapacity: "About3000W",
      payload: "≈8kg (MAX = 10kg)",
      speed: "0 ~ 3.5m/s",
      maxClimbDropHeight: "About16cm",
      maxClimbAngle: "40°",
      basicComputingPower: "8-core High-performance CPU",
      maxTorque: "About45N.m",
      jointMotor: "12set",
      rangeOfMotion: { body: "-48°~48°", thigh: "-200°~90°", shank: "-156°~48°" },
      intraJointCircuitLines: true,
      jointHeatPipeCooler: true,
      superWideAngle3DLidar: true,
      wirelessVectorPositioningTracking: true,
      hdWideAngleCamera: true,
      footAndNosesensor: false,
      basicAction: true,
      authenticatedWrap: true,
      upgradedIntelligencePla: true,
      http24ImageTransmission: true,
      graphicsProgram: true,
      frontLamp: true,
      wifiWithDualBand: true,
      bluetooth: true,
      fourGModule: true,
      voiceFunctions: true,
      ios20IntelligentSafeFollow: true,
      intelligentDetectionAndAvoidance: true,
      chargingPileCompatibility: false,
      secondaryDevelopment: false,
      manualController: "optional",
      highComputingPowerModule: "○",
      smartBattery: "standard (8000mAh)",
      batteryLife: "About1~2h",
      charger: "standard (33.6V 3.5A)",
      warrantyPeriod: "12 months",
    },
    {
      model: "EDU",
      standingDimensions: "70×31×40cm",
      crouchingDimensions: "76×31×20cm",
      weight: "About 15kg",
      material: "Aluminum alloy + High strength engineering plastic",
      voltage: "28V~33.6V",
      peakingCapacity: "About3000W",
      payload: "≈8kg (MAX = 12kg)",
      speed: "0 ~ 3.7m/s (MAX = 5m/s)",
      maxClimbDropHeight: "About16cm",
      maxClimbAngle: "40°",
      basicComputingPower: "8-core High-performance CPU",
      maxTorque: "About45N.m",
      jointMotor: "12set",
      rangeOfMotion: { body: "-48°~48°", thigh: "-200°~90°", shank: "-156°~48°" },
      intraJointCircuitLines: true,
      jointHeatPipeCooler: true,
      superWideAngle3DLidar: true,
      wirelessVectorPositioningTracking: true,
      hdWideAngleCamera: true,
      footAndNosesensor: true,
      basicAction: true,
      authenticatedWrap: true,
      upgradedIntelligencePla: true,
      http24ImageTransmission: true,
      graphicsProgram: true,
      frontLamp: true,
      wifiWithDualBand: true,
      bluetooth: true,
      fourGModule: true,
      voiceFunctions: true,
      ios20IntelligentSafeFollow: true,
      intelligentDetectionAndAvoidance: true,
      chargingPileCompatibility: true,
      secondaryDevelopment: true,
      manualController: "●",
      highComputingPowerModule:
        "Nvidia Jetson Orin (optional) (+40-100 of computing power)",
      smartBattery: "long endurance (15000mAh)",
      batteryLife: "About2~4h",
      charger: "fast charge (33.6V 9A)",
      warrantyPeriod: "12 months",
    },
  ];

  // Group 1: Basic Physical Specifications (4 items)
  const group1Labels = {
    standingDimensions: "Dimension of standing",
    crouchingDimensions: "Dimension of crouching",
    weight: "Weight (with battery)",
    material: "Material",
  };

  // Group 2: Motion & Range (2 items)
  const group2Labels = {
    rangeOfMotion: "Range of Motion",
    intraJointCircuitLines: "Intra-joint circuit lines",
  };

  // Group 3: Power & Performance (5 items)
  const group3Labels = {
    voltage: "Voltage",
    peakingCapacity: "Peaking capacity",
    payload: "Payload",
    speed: "Speed",
    maxClimbDropHeight: "Max climb Drop Height",
  };

  // Group 4: Motor & Control (5 items)
  const group4Labels = {
    maxClimbAngle: "Max climb Angle",
    basicComputingPower: "Basic Computing Power",
    maxTorque: "Max Torque(1)",
    jointMotor: "Aluminum knee joint motor",
    jointHeatPipeCooler: "Joint Heat Pipe Cooler",
  };

  // Group 5: Sensors & Detection (4 items)
  const group5Labels = {
    superWideAngle3DLidar: "Super wide-angle 3D LiDAR",
    wirelessVectorPositioningTracking: "Wireless Vector Positioning Tracking Module",
    hdWideAngleCamera: "HD Wide-angle Camera",
    footAndNosesensor: "Foot and Nose sensor",
  };

  // Group 6: Advanced Features & Intelligence (14 items)
  const group6Labels = {
    basicAction: "Basic Action",
    authenticatedWrap: "Authenticated wrap",
    upgradedIntelligencePla: "Upgraded Intelligence PLA",
    http24ImageTransmission: "HTTP 2.4 Image Transmission",
    graphicsProgram: "Graphics programme",
    frontLamp: "Front Lamp",
    wifiWithDualBand: "WIFI with Dual-band",
    bluetooth: "Bluetooth 5.2/4.2/2.1",
    fourGModule: "4G module (Only supports mainland China and Europe)",
    voiceFunctions: "Voice Functions(4)",
    ios20IntelligentSafeFollow: "IOS 2.0 Intelligent safe-follow system",
    intelligentDetectionAndAvoidance: "Intelligent detection and avoidance",
    chargingPileCompatibility: "Charging Pile Compatibility",
    secondaryDevelopment: "Secondary development(*)",
  };

  // Group 7: Power System & Accessories (5 items)
  const group7Labels = {
    manualController: "Manual controller",
    highComputingPowerModule: "High computing power module",
    smartBattery: "Smart battery",
    batteryLife: "Battery life",
    charger: "Charger",
  };

  // Group 8: Warranty (1 item)
  const group8Labels = {
    warrantyPeriod: "Warranty Period",
  };

  // All groups for mobile rendering
  const allGroups = [
    { title: "Mechanical Specification", items: group1Labels, isBoolean: false },
    { title: "Electron Parameter", items: { rangeOfMotion: "Range of Motion", intraJointCircuitLines: "Intra-joint circuit lines" }, isBoolean: false },
    { title: "Performance Parameters", items: group3Labels, isBoolean: false },
    { title: "Knee joint Parameters", items: group4Labels, isBoolean: false },
    { title: "Force Sensor Parameters", items: group5Labels, isBoolean: true },
    { title: "Feature List", items: group6Labels, isBoolean: true },
    { title: "Accessories", items: group7Labels, isBoolean: false },
    { title: "Warranty", items: group8Labels, isBoolean: false },
  ];

  const getImageForModel = (model: string) => {
    switch (model) {
      case "AIR": return "/media/Robot_hero.svg";
      case "PRO": return "/media/Robot_Details.svg";
      case "EDU": return "/media/Robot_Fighting.svg";
      default: return "/media/Robot_hero.svg";
    }
  };

  const formatValue = (key: string, value: any, isBoolean: boolean) => {
    if (key === "rangeOfMotion") {
      return (
        <div className="text-sm">
          <div>body: {value.body}</div>
          <div>thigh: {value.thigh}</div>
          <div>shank: {value.shank}</div>
        </div>
      );
    }
    
    if (isBoolean) {
      return (
        <span className="text-2xl leading-none inline-block w-6 text-center">
          {value.toString() === "true" ? "●" : "○"}
        </span>
      );
    }
    
    return value;
  };



  const renderGroup = (
    groupIndex: string,
    groupLabel: string,
    items: { [key: string]: string },
    isBoolean = false,
    customRowSpan?: number,
    customColSpan?: number
  ) => {
    const entries = Object.entries(items);
    const rowSpanValue = customRowSpan || entries.length;
    const colSpanValue = customColSpan || 1;
    
    return (
      <>
        {entries.map(([key, label], idx) => (
          <tr key={key} className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
            {idx === 0 ? (
              <td 
                rowSpan={rowSpanValue} 
                colSpan={colSpanValue}
                className="p-3 border-2 border-gray-800 text-center align-middle rounded-xx mx-4 my-4 my-2"
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
            {specifications.map((spec, specIdx) =>
              isBoolean
                ? <td key={spec.model} className="p-3 text-center">
                    <span className="text-2xl leading-none inline-block w-6 text-center">
                      {(spec[key as keyof RobotSpec] as boolean).toString() === "true" ? "●" : "○"}
                    </span>
                  </td>
                : <td key={spec.model} className="p-3 text-center">
                    {spec[key as keyof RobotSpec] as string}
                  </td>
            )}
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
              <div key={groupIndex} className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-blue-400 border-b border-gray-700 pb-2">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {Object.entries(group.items).map(([key, label]) => {
                    const selectedSpec = specifications.find(s => s.model === selectedModel);
                    const value = selectedSpec?.[key as keyof RobotSpec];
                    
                    return (
                      <div key={key} className="flex justify-between items-start py-2 border-b border-gray-800 last:border-b-0">
                        <span className="text-gray-300 text-sm flex-1 pr-4">{label}</span>
                        <span className="text-white text-sm font-medium text-right flex-1">
                          {formatValue(key, value, group.isBoolean)}
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
          {/* Desktop Images positioned above the table */}
          <div className="flex mb-4">
            <div className="w-20"></div> {/* Spacer for index column */}
            <div className="w-64"></div> {/* Spacer for specifications column */}
            <div className="flex-1 flex flex-col items-center px-2">
              <img 
                src="/media/Robot_hero.svg" 
                alt="AIR Robot" 
                className="w-20 h-20 mb-2 object-contain"
              />
              <span className="font-bold text-black dark:text-white text-sm">AIR</span>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <img 
                src="/media/Robot_Details.svg" 
                alt="PRO Robot" 
                className="w-20 h-20 mb-2 object-contain"
              />
              <span className="font-bold text-black dark:text-white text-sm">PRO</span>
            </div>
            <div className="flex-1 flex flex-col items-center px-2">
              <img 
                src="/media/Robot_Fighting.svg" 
                alt="EDU Robot" 
                className="w-20 h-20 mb-2 object-contain"
              />
              <span className="font-bold text-black dark:text-white text-sm">EDU</span>
            </div>
          </div>
          
          {/* Desktop Table with horizontal scroll */}
          <div className="border border-gray-700 rounded-lg overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <tbody>
                {/* Group 1: Basic Physical Specifications (4 items) */}
                {renderGroup("Mechanical Specification", "Basic Physical Specifications", group1Labels)}

                {/* Group 2: Motion & Range (2 items) */}
                <tr className="bg-gray-900">
                  <td rowSpan={2} className="p-3 border-2 border-gray-800 text-center align-middle rounded-xx mx-4 my-4" style={{ 
                    backgroundColor: 'transparent',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(360deg)',
                    whiteSpace: 'nowrap',
                    margin: '8px 16px',
                  }}>
                    Electron Parameter
                  </td>
                  <td className="p-3">Range of Motion</td>
                  {specifications.map((spec) => (
                    <td key={spec.model} className="p-3 text-center">
                      body: {spec.rangeOfMotion.body}, <br/> thigh: {spec.rangeOfMotion.thigh},<br/> shank: {spec.rangeOfMotion.shank}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Intra-joint circuit lines</td>
                  {specifications.map((spec) => (
                    <td key={spec.model} className="p-3 text-center">
                      <span className="text-2xl leading-none inline-block w-6 text-center">
                        {spec.intraJointCircuitLines.toString() === "true" ? "●" : "○"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Group 3: Power & Performance (5 items) */}
                {renderGroup("Performance Parameters", "Power & Performance", group3Labels)}

                {/* Group 4: Motor & Control (5 items) */}
                {renderGroup("Knee joint Parameters", "Motor & Control", group4Labels)}

                {/* Group 5: Sensors & Detection (4 items) */}
                {Object.entries(group5Labels).map(([key, label], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                    {idx === 0 ? (
                      <td
                        rowSpan={Object.entries(group5Labels).length}
                        className="p-3 border-2 border-gray-800 text-center align-middle rounded-xx mx-4 my-4"
                        style={{
                          backgroundColor: 'transparent',
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed',
                          transform: 'rotate(360deg)',
                          whiteSpace: 'nowrap',
                          margin: '8px 16px',
                        }}
                      >
                        Force Sensor Parameters
                      </td>
                    ) : null}
                    <td className="p-3">{label}</td>
                    {specifications.map((spec) =>
                      <td key={spec.model} className="p-3 text-center">
                        <span className="text-2xl leading-none inline-block w-6 text-center">
                          {(spec[key as keyof RobotSpec] as boolean).toString() === "true" ? "●" : "○"}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}

                {/* Show rest of table when showMoreSensors is true */}
                {showMoreSensors && (
                  <>
                    {/* Group 6: Advanced Features & Intelligence (14 items) */}
                    {renderGroup("Feature List", "Advanced Features & Intelligence", group6Labels, true)}

                    {/* Group 7: Power System & Accessories (5 items) */}
                    {renderGroup("Accessories", "Power System & Accessories", group7Labels)}

                    {/* Group 8: Warranty */}
                    {renderGroup("Warranty", "Warranty", group8Labels)}
                  </>
                )}
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