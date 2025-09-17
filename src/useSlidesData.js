import { useMemo } from 'react';

export const useSlidesData = () => {
  const slidesData = useMemo(() => ({
    slides: [
      {
        id: 1,
        title: "Welcome to SAP onBoarding",
        subtitle: "Discover powerful features to transform your business insights",
        type: "feature",
        content: {
          header: "SAP Analytics Cloud",
          title: "Intelligence at your fingertips",
          description: "Connect, analyze, and visualize your data with our integrated analytics platform. Make data-driven decisions with real-time insights, predictive analytics, and collaborative planning tools.",
          buttonText: "Get Started",
          image: "/image1.jpg",
          icon: "bar-chart-3",
          gradient: "from-blue-600 via-blue-700 to-indigo-800",
        },
      },
      {
        id: 2,
        title: "Advanced Data Visualization",
        subtitle: "Create stunning reports and interactive dashboards",
        type: "feature",
        content: {
          header: "Smart Visualization",
          title: "Stories that drive action",
          description: "Build compelling data stories with our drag-and-drop designer. Create interactive charts, geo-maps, and custom visualizations that automatically adapt to your data changes and business context.",
          buttonText: "Explore Templates",
          image: "/image2.jpg",
          icon: "bar-chart-3",
          gradient: "from-emerald-500 via-teal-600 to-cyan-700",
        },
      },
      {
        id: 3,
        title: "Collaborative Planning",
        subtitle: "Unite teams with shared planning workflows",
        type: "feature",
        content: {
          header: "Enterprise Planning",
          title: "Plan together, succeed together",
          description: "Streamline your planning processes with collaborative workflows. Enable cross-functional teams to contribute, review, and approve plans in real-time with built-in governance and audit trails.",
          buttonText: "Start Planning",
          image: "/image1.jpg",
          icon: "users",
          gradient: "from-purple-600 via-violet-700 to-indigo-800",
        },
      },
      {
        id: 4,
        title: "Predictive Intelligence",
        subtitle: "Forecast trends with machine learning",
        type: "feature",
        content: {
          header: "Smart Predict",
          title: "See what's coming next",
          description: "Leverage built-in machine learning algorithms to predict future trends, identify anomalies, and simulate scenarios. Transform historical data into actionable insights for strategic decision-making.",
          buttonText: "Try Predictions",
          image: "/image2.jpg",
          icon: "zap",
          gradient: "from-red-500 via-pink-600 to-purple-700",
        },
      },
      {
        id: 5,
        title: "Enterprise Security",
        subtitle: "Protect your data with enterprise-grade security",
        type: "feature",
        content: {
          header: "Data Protection",
          title: "Security you can trust",
          description: "Enterprise-grade security with role-based access control, data encryption, and compliance frameworks.",
          buttonText: "Configure Security",
          image: "/image1.jpg",
          icon: "shield",
          gradient: "from-gray-700 via-slate-800 to-zinc-900",
        },
      },
    ],
  }), []);

  const homePageData = useMemo(() => ({
    header: "Start Your Journey",
    tabs: [
      {
        title: "Data Connection Hub",
        description: "Connect to 100+ data sources including SAP systems, cloud databases, and third-party applications",
        image: "image1.jpg",
        buttonText: "Connect Data",
        color: "blue",
        icon: "globe",
      },
      {
        title: "Template Gallery",
        description: "Browse pre-built dashboards and reports designed for your industry and business function",
        image: "image2.jpg",
        buttonText: "Browse Gallery",
        color: "emerald",
        icon: "bar-chart-3",
      },
      {
        title: "Learning Center",
        description: "Access tutorials, best practices, and certification programs to master SAP Analytics",
        image: "image1.jpg",
        buttonText: "Start Learning",
        color: "purple",
        icon: "users",
      },
    ],
  }), []);

  return { slides: slidesData.slides, homePageData };
};