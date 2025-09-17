import React from 'react';
import { BarChart3, Users, Settings, Shield, Zap, Globe } from 'lucide-react';

export const IconRenderer = ({ iconName, className = 'w-6 h-6 sm:w-8 sm:h-8' }) => {
  const icons = {
    'bar-chart-3': BarChart3,
    users: Users,
    shield: Shield,
    settings: Settings,
    zap: Zap,
    globe: Globe,
  };

  const IconComponent = icons[iconName] || BarChart3;
  return <IconComponent className={className} />;
};