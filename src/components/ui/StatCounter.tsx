import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const { count, ref } = useAnimatedCounter(value);
  
  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
