export default function getInvertersData(t: (val: string) => string) {
  return {
    title: t("HYBRID SOLAR INVERTERS"),
    description: t("Pure sine wave hybrid solar inverters available in direct container loads. Offering backup system dealers, solar contractors, and installers factory-direct merchant pricing scales and part warranties."),
    items: [
      {
        name: t("Voltaria VL-2500"),
        model: t("VL-2500"),
        image: t("/images/voltaria-inverter-vl2500.png"),
        description: t("Voltaria VL-2500 is a 2500W Hybrid MPPT Solar Inverter designed for reliable solar power systems. It delivers pure sine wave output, supports operation with or without a battery, and features a wide MPPT voltage range for maximum solar energy efficiency."),
        features: [
          t("2500W Pure Sine Wave Output"),
          t("Wide MPPT Range (30V–400V)"),
          t("Works with or without battery"),
          t("Lithium Battery Compatible & WiFi Ready")
        ],
        specs: {
          [t("Rated Power")]: t("2.5kVA / 2.5kW (PF=1.0)"),
          [t("Surge Power")]: t("4kVA"),
          [t("Battery Voltage")]: t("12VDC"),
          [t("PV Start-up Voltage")]: t("40VDC"),
          [t("Max PV Input Current")]: t("18A"),
          [t("Max PV Input Power")]: t("3000W"),
          [t("Max Charge Current")]: t("100A"),
          [t("AC Output")]: t("220–230–240V"),
          [t("Output Frequency")]: t("50/60Hz"),
          [t("Operating Temp")]: t("-10°C to 60°C")
        },
        moq: t("10 Inverters (2 Crates)"),
        capacity: t("3,000 Units / Month"),
        packaging: t("Padded wood crates (5 inverters/crate)"),
        customization: t("Merchant app dashboard integrations")
      },
      {
        name: t("Voltaria SolX Hybrid 3kVA"),
        model: t("SX-3.0H"),
        image: t("/images/voltaria-inverter-3kva.png"),
        description: t("High-performance hybrid solar inverter designed to power complete household loads and dual-battery packages."),
        features: [t("3.0 kVA capacity"), t("Intelligent battery charger optimizer"), t("Configurable solar/mains priority flow"), t("Backlit graphical configuration console")],
        specs: { 
          [t("Capacity")]: t("3000VA / 2400W"), 
          [t("Battery Voltage​")]: t("24V DC Input"), 
          [t("MPPT Voltage")]: t("120V - 450V DC"), 
          [t("Output Wave")]: t("Pure Sine Wave") 
        },
        moq: t("10 Inverters (2 Crates)​"),
        capacity: t("3,000 Units / Month​"),
        packaging: t("Padded wood crates (5 inverters/crate)​"),
        customization: t("Merchant app dashboard integrations​")
      },
      {
        name: t("Voltaria SolX Hybrid 5kVA Wi-Fi"),
        model: t("SX-5.0H"),
        image: t("/images/voltaria-inverter-5kva.png"),
        description: t("Premium commercial-grade hybrid inverter with built-in Wi-Fi logging and comprehensive mobile app dashboard."),
        features: [t("5.0 kVA capacity"), t("Zero-transfer bypass mode"), t("Parallel expansion options up to 30kVA"), t("Remote web console and Wi-Fi antennas")],
        specs: { 
          [t("Capacity​")]: t("5000VA / 4000W"), 
          [t("Battery Voltage​​")]: t("48V DC Input"), 
          [t("MPPT Voltage​")]: t("120V - 450V DC​"), 
          [t("Output Wave​")]: t("Pure Sine Wave​") 
        },
        moq: t("5 Inverters (1 Crate)"),
        capacity: t("2,000 Units / Month"),
        packaging: t("Padded wood crates (5 inverters/crate)​​"),
        customization: t("Dedicated wholesale app integrations")
      }
    ]
  };
}
