import defaultSettings from "@/config/defaultSettings";
import { Settings } from "@ant-design/pro-layout";


export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const collapsed = device !== 'DESKTOP';
  const settings: Settings = {...defaultSettings};
  return {
    device,
    collapsed,
    settings,
  } as const;
}

