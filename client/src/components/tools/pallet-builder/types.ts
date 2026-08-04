export interface PalletConfig {
  palletType: string;
  dimensions: string;
  customDimensions: string;
  loadCapacity: string;
  woodTreatment: string;
  quantity: number;
  industry: string;
}

export interface PalletOption {
  id: string;
  name?: string;
  label?: string;
  desc?: string;
}
