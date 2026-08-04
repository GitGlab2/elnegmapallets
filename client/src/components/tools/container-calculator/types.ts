export interface ContainerSpec {
  name: string;
  nameEn: string;
  lengthMm: number;
  widthMm: number;
  heightMm: number;
  maxWeightKg: number;
}

export interface ContainerConfig {
  containerKey: string;
  selectedSizeIndex: number;
  customLength: number;
  customWidth: number;
  stackTiers: number;
  palletWeightKg: number;
}
