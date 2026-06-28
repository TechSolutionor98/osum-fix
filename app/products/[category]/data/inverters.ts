export default function getInvertersData(t: (val: string) => string) {
  return {
    title: t("HYBRID SOLAR INVERTERS"),
    description: t("Pure sine wave hybrid solar inverters available in direct container loads. Offering backup system dealers, solar contractors, and installers factory-direct merchant pricing scales and part warranties."),
    items: [
      {
        name: t("Voltaria SolX Hybrid 1.5kVA"),
        model: t("SX-1.5H"),
        image: t("/images/voltaria-inverter-1.5kva.png"),
        description: t("Sleek wall-mounted hybrid solar inverter with integrated MPPT charge controller and pure sine wave voltage."),
        features: [t("1.5 kVA capacity"), t("Built-in 80A MPPT solar regulator"), t("Compatible with lead-acid & lithium cells"), t("Multi-stage battery management optimization")],
        specs: { [t("Capacity")]: t("1500VA / 1200W"), [t("Battery Voltage")]: t("12V DC Input"), [t("MPPT Voltage")]: t("120V - 450V DC"), [t("Output Wave")]: t("Pure Sine Wave") },
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
        specs: { [t("Capacity")]: t("3000VA / 2400W"), [t("Battery Voltage")]: t("24V DC Input"), [t("MPPT Voltage")]: t("120V - 450V DC"), [t("Output Wave")]: t("Pure Sine Wave") },
        moq: t("10 Inverters (2 Crates)"),
        capacity: t("3,000 Units / Month"),
        packaging: t("Padded wood crates (5 inverters/crate)"),
        customization: t("Merchant app dashboard integrations")
      },
      {
        name: t("Voltaria SolX Hybrid 5kVA Wi-Fi"),
        model: t("SX-5.0H"),
        image: t("/images/voltaria-inverter-5kva.png"),
        description: t("Premium commercial-grade hybrid inverter with built-in Wi-Fi logging and comprehensive mobile app dashboard."),
        features: [t("5.0 kVA capacity"), t("Zero-transfer bypass mode"), t("Parallel expansion options up to 30kVA"), t("Remote web console and Wi-Fi antennas")],
        specs: { [t("Capacity")]: t("5000VA / 4000W"), [t("Battery Voltage")]: t("48V DC Input"), [t("MPPT Voltage")]: t("120V - 450V DC"), [t("Output Wave")]: t("Pure Sine Wave") },
        moq: t("5 Inverters (1 Crate)"),
        capacity: t("2,000 Units / Month"),
        packaging: t("Padded wood crates (5 inverters/crate)"),
        customization: t("Dedicated wholesale app integrations")
      }
    ]
  };
}
