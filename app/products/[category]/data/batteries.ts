export default function getBatteriesData(t: (val: string) => string) {
  return {
    title: t("DEEP-CYCLE TUBULAR BATTERIES"),
    description: t("Built to survive demanding power cycles and frequent utility failures. Palletized factory-direct shipping to battery distributors and solar dealerships."),
    items: [
      {
        name: t("Voltaria VoltaCell Tall Tubular"),
        model: t("VC-150T"),
        image: t("/images/voltaria-battery-tall.png"),
        description: t("Deep-cycle solar tall tubular battery designed to withstand frequent power outages and recover rapidly."),
        features: [t("150Ah nominal capacity"), t("Ultra-thick antimony grid structure"), t("Extra-long water refilling windows"), t("Low resistance micro-porous separators")],
        specs: { [t("Voltage")]: t("12V DC"), [t("Capacity")]: t("150Ah"), [t("Reserve Time")]: t("Up to 6 Hours"), [t("Lifespan")]: t("1500+ Cycles") },
        moq: t("24 Units (2 Pallets)"),
        capacity: t("5,000 Units / Month"),
        packaging: t("Palletized wood crates (12 units/pallet)"),
        customization: t("Standard custom merchant colors")
      },
      {
        name: t("Voltaria VoltaMax Tubular"),
        model: t("VM-200T"),
        image: t("/images/voltaria-battery-max.png"),
        description: t("Heavy-duty 200Ah battery engineered for high-surge inverter loads and reliable residential power backups."),
        features: [t("200Ah storage capacity"), t("Acid level indicator float caps included"), t("Highly resistant to thermal runs"), t("Leak-proof grid vent design")],
        specs: { [t("Voltage")]: t("12V DC"), [t("Capacity")]: t("200Ah"), [t("Reserve Time")]: t("Up to 8 Hours"), [t("Lifespan")]: t("1500+ Cycles") },
        moq: t("24 Units (2 Pallets)"),
        capacity: t("5,000 Units / Month"),
        packaging: t("Palletized wood crates (12 units/pallet)"),
        customization: t("Standard custom merchant colors")
      },
      {
        name: t("Voltaria VoltaSuper Max"),
        model: t("VS-230T"),
        image: t("/images/voltaria-battery-super.png"),
        description: t("Commercial-grade 230Ah tall tubular battery providing maximum backup capacity for servers and heavy inductive loads."),
        features: [t("230Ah ultra capacity"), t("Optimized active paste material"), t("5-year comprehensive coverage warranty"), t("Reinforced safety plastic handles")],
        specs: { [t("Voltage")]: t("12V DC"), [t("Capacity")]: t("230Ah"), [t("Reserve Time")]: t("Up to 10 Hours"), [t("Lifespan")]: t("1800+ Cycles") },
        moq: t("12 Units (1 Pallet)"),
        capacity: t("3,000 Units / Month"),
        packaging: t("Palletized wood crates (12 units/pallet)"),
        customization: t("Custom Terminal Caps Available")
      }
    ]
  };
}
