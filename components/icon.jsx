import {
  Home,
  Sun,
  Droplets,
  Zap,
  PlugZap,
  BatteryCharging,
  Wrench,
  FileCheck,
  ShieldCheck,
  Award,
  Leaf,
  Headset,
  TrendingUp,
  HelpCircle,
} from 'lucide-react'

const map = {
  Home,
  Sun,
  Droplets,
  Zap,
  PlugZap,
  BatteryCharging,
  Wrench,
  FileCheck,
  ShieldCheck,
  Award,
  Leaf,
  Headset,
  TrendingUp,
}

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || HelpCircle
  return <Cmp {...props} />
}
