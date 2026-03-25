export type DashboardPeriod = "today" | "week" | "month" | "all";

export interface DashbordData {
    activeVehicles: number;
    totalEntries: number;
    totalExits: number;
    totalRevenue: number;
}