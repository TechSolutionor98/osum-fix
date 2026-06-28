export default function getChangeoversData(t: (val: string) => string) {
  return {
    title: t("AUTOMATIC CHANGEOVERS (ATS)"),
    description: t("Eliminate transition power spikes with Voltaria smart ATS transfer panels. Supplying backup power manufacturers, generator builders, and industrial outlets with rapid changeover relays packed in secure crates."),
    items: [
      {
        name: t("Voltaria SmartATS 63A"),
        model: t("S-ATS63"),
        image: t("/images/voltaria-changeover-63a.png"),
        description: t("Dual-source smart automatic transfer panel with integrated under/over voltage protection parameters."),
        features: [t("63A current capacity"), t("Rapid transfer speed (< 0.5s)"), t("Clear LED diagnostics display screen"), t("Auto generator command start relay")],
        specs: { [t("Rated Voltage")]: t("220V/240V AC"), [t("Amperage")]: t("63A"), [t("Transfer Time")]: t("< 0.4s"), [t("Warranty")]: t("2 Years") },
        moq: t("20 Panels (2 Crates)"),
        capacity: t("2,000 Units / Month"),
        packaging: t("Crated cartons of 10 panels"),
        customization: t("OEM wiring setups available")
      },
      {
        name: t("Voltaria SmartATS 100A Heavy-Duty"),
        model: t("S-ATS100"),
        image: t("/images/voltaria-changeover-100a.png"),
        description: t("Industrial-grade ATS supporting generator startup triggers and heavy corporate air conditioner loads."),
        features: [t("100A high load support"), t("Integrated auxiliary contact ports"), t("External manual override key switch"), t("Flame-retardant arc grid sheets")],
        specs: { [t("Rated Voltage")]: t("400V AC Max"), [t("Amperage")]: t("100A"), [t("Poles")]: t("4-Pole"), [t("Warranty")]: t("2 Years") },
        moq: t("10 Panels (1 Crate)"),
        capacity: t("1,500 Units / Month"),
        packaging: t("Padded wooden crate (10 panels/crate)"),
        customization: t("OEM Custom Enclosure Labeling")
      }
    ]
  };
}
