import { TimelineItem } from "./TimelineItem";

interface TimelineData {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}

interface TimelineProps {
  items: TimelineData[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          period={item.period}
          description={item.description}
          tags={item.tags}
          index={index}
        />
      ))}
    </div>
  );
}
