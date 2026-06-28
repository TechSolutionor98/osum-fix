export default function getFansData(t: (val: string) => string) {
  return {
    title: t("PREMIUM AERODYNAMIC FANS"),
    description: t("Discover Voltaria's high-efficiency ceiling, pedestal, and exhaust fans. Direct-to-merchant factory supply in container-load sizes, with OEM custom branding available for retail chains and distributors."),
    items: [
      {
        name: t("Voltaria AeroBreeze Ceiling Fan"),
        model: t("AB-56C"),
        image: t("/images/voltaria-fan.png"),
        description: t("Aerodynamic high-speed ceiling fan with dual-shielded bearings and 100% copper motor, engineered for silent cooling."),
        features: [t("56-inch sweep size"), t("Whisper-quiet double-shielded bearings"), t("Energy efficient < 55W consumption"), t("Precision-engineered aluminum alloy blades")],
        specs: { [t("Sweep Size")]: t('1500mm (60")'), [t("Motor Type")]: t("100% Pure Copper"), [t("Speed")]: t("400 RPM"), [t("Power")]: t("55W") },
        moq: t("50 Units"),
        capacity: t("10,000 Units / Month"),
        packaging: t("Wood Pallet (20 units/carton)"),
        customization: t("OEM Logo Printing Available")
      },
      {
        name: t("Voltaria WindStorm Pedestal Fan"),
        model: t("WS-16P"),
        image: t("/images/voltaria-pedestal-fan.png"),
        description: t("High-torque portable pedestal fan with telescoping height adjustments and wide-angle oscillation."),
        features: [t("16-inch high-velocity blade set"), t("3-speed remote control interface"), t("Thermal overload fuse protection"), t("Adjustable telescopic stand")],
        specs: { [t("Sweep Size")]: t('400mm (16")'), [t("Speed Options")]: t("3-Speed Settings"), [t("Airflow Capacity")]: t("85 CMM"), [t("Blade Span")]: t("1400 mm (56 inches)") },
        moq: t("100 Units"),
        capacity: t("5,000 Units / Month"),
        packaging: t("Standard Cartons (1 unit/box)"),
        customization: t("OEM Housing Color Options")
      },
      {
        name: t("Voltaria Cyclone Exhaust Fan"),
        model: t("CY-12E"),
        image: t("/images/voltaria-exhaust-fan.png"),
        description: t("Heavy-duty rust-proof ventilation fan designed to rapidly clear air in kitchens, bathrooms, or workspaces."),
        features: [t("Automatic back-draft louvers"), t("Rust-proof ABS body construction"), t("High-velocity suction speed"), t("Easy mount wall installation framework")],
        specs: { [t("Sweep Size")]: t('300mm (12")'), [t("Speed")]: t("1400 RPM"), [t("Suction Power")]: t("1200 m³/h"), [t("Power")]: t("45W") },
        moq: t("100 Units"),
        capacity: t("8,000 Units / Month"),
        packaging: t("Industrial Cartons (10 units/box)"),
        customization: t("Custom Grille Color Available")
      }
    ]
  };
}
