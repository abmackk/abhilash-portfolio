import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Cloud, Shield, Server, Database, GitBranch, Activity, Lock, Globe, Cpu, HardDrive } from 'lucide-react';
import type { ReactNode } from 'react';

const serviceIcons: Record<string, ReactNode> = {
  Route53: <Globe size={16} />,
  CloudFront: <Cloud size={16} />,
  WAF: <Shield size={16} />,
  ALB: <Server size={16} />,
  ECS: <Cpu size={16} />,
  RDS: <Database size={16} />,
  ElastiCache: <HardDrive size={16} />,
  S3: <HardDrive size={16} />,
  Lambda: <Activity size={16} />,
  CloudWatch: <Activity size={16} />,
  CodePipeline: <GitBranch size={16} />,
  IAM: <Lock size={16} />,
};

const nodeColors: Record<string, string> = {
  Route53: '#ff9900',
  CloudFront: '#ff9900',
  WAF: '#ff4d4d',
  ALB: '#00bcd4',
  ECS: '#ff9900',
  RDS: '#4a90d9',
  ElastiCache: '#4a90d9',
  S3: '#ff9900',
  Lambda: '#ff9900',
  CloudWatch: '#ff9900',
  CodePipeline: '#7c4dff',
  IAM: '#ff6d00',
};

interface NodeData {
  label: string;
  icon: ReactNode;
}

function ServiceNode({ data }: NodeProps) {
  const { label, icon } = data as unknown as NodeData;
  const color = nodeColors[label] || '#ffb300';
  return (
    <div
      className="arch-node"
      style={{
        borderColor: color,
        background: `rgba(13, 13, 18, 0.9)`,
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: color }} />
      <div className="arch-node-icon" style={{ color }}>
        {icon}
      </div>
      <div className="arch-node-label">{label}</div>
      <Handle type="source" position={Position.Bottom} style={{ background: color }} />
    </div>
  );
}

const nodeTypes = { serviceNode: ServiceNode };

const initialNodes: Node[] = [
  {
    id: 'route53',
    type: 'serviceNode',
    position: { x: 250, y: 0 },
    data: { label: 'Route53', icon: serviceIcons['Route53'] },
  },
  {
    id: 'cloudfront',
    type: 'serviceNode',
    position: { x: 250, y: 100 },
    data: { label: 'CloudFront', icon: serviceIcons['CloudFront'] },
  },
  {
    id: 'waf',
    type: 'serviceNode',
    position: { x: 250, y: 200 },
    data: { label: 'WAF', icon: serviceIcons['WAF'] },
  },
  {
    id: 'alb',
    type: 'serviceNode',
    position: { x: 250, y: 300 },
    data: { label: 'ALB', icon: serviceIcons['ALB'] },
  },
  {
    id: 'ecs',
    type: 'serviceNode',
    position: { x: 100, y: 420 },
    data: { label: 'ECS Fargate', icon: serviceIcons['ECS'] },
  },
  {
    id: 'lambda',
    type: 'serviceNode',
    position: { x: 400, y: 420 },
    data: { label: 'Lambda', icon: serviceIcons['Lambda'] },
  },
  {
    id: 'rds',
    type: 'serviceNode',
    position: { x: 100, y: 540 },
    data: { label: 'RDS / Aurora', icon: serviceIcons['RDS'] },
  },
  {
    id: 'elasticache',
    type: 'serviceNode',
    position: { x: 400, y: 540 },
    data: { label: 'ElastiCache', icon: serviceIcons['ElastiCache'] },
  },
  {
    id: 's3',
    type: 'serviceNode',
    position: { x: 100, y: 660 },
    data: { label: 'S3', icon: serviceIcons['S3'] },
  },
  {
    id: 'cloudwatch',
    type: 'serviceNode',
    position: { x: 400, y: 660 },
    data: { label: 'CloudWatch', icon: serviceIcons['CloudWatch'] },
  },
  {
    id: 'codepipeline',
    type: 'serviceNode',
    position: { x: -50, y: 660 },
    data: { label: 'CodePipeline', icon: serviceIcons['CodePipeline'] },
  },
  {
    id: 'iam',
    type: 'serviceNode',
    position: { x: -50, y: 540 },
    data: { label: 'IAM', icon: serviceIcons['IAM'] },
  },
];

const initialEdges: Edge[] = [
  { id: 'e-rt-cf', source: 'route53', target: 'cloudfront', animated: true, style: { stroke: '#ffb300', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ffb300' } },
  { id: 'e-cf-waf', source: 'cloudfront', target: 'waf', animated: true, style: { stroke: '#ffb300', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ffb300' } },
  { id: 'e-waf-alb', source: 'waf', target: 'alb', animated: true, style: { stroke: '#ffb300', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ffb300' } },
  { id: 'e-alb-ecs', source: 'alb', target: 'ecs', style: { stroke: '#7c4dff', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#7c4dff' } },
  { id: 'e-alb-lambda', source: 'alb', target: 'lambda', style: { stroke: '#7c4dff', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#7c4dff' } },
  { id: 'e-ecs-rds', source: 'ecs', target: 'rds', style: { stroke: '#4a90d9', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#4a90d9' } },
  { id: 'e-ecs-ec', source: 'ecs', target: 'elasticache', style: { stroke: '#4a90d9', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#4a90d9' } },
  { id: 'e-ecs-s3', source: 'ecs', target: 's3', style: { stroke: '#ff9900', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ff9900' } },
  { id: 'e-ecs-cw', source: 'ecs', target: 'cloudwatch', style: { stroke: '#ff9900', strokeWidth: 2, strokeDasharray: '5 5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ff9900' } },
  { id: 'e-lambda-cw', source: 'lambda', target: 'cloudwatch', style: { stroke: '#ff9900', strokeWidth: 2, strokeDasharray: '5 5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ff9900' } },
  { id: 'e-iam-ecs', source: 'iam', target: 'ecs', style: { stroke: '#ff6d00', strokeWidth: 2, strokeDasharray: '3 3' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ff6d00' } },
  { id: 'e-cp-ecs', source: 'codepipeline', target: 'ecs', animated: true, style: { stroke: '#7c4dff', strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#7c4dff' } },
];

export function Architecture() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section id="architecture">
      <AnimatedSection>
        <div className="section-header">
          <div className="section-label">// INFRASTRUCTURE</div>
          <h2 className="section-title">Cloud Architecture</h2>
          <p className="section-desc">Interactive reference architecture — drag, pan, and zoom to explore.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="arch-container">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            minZoom={0.3}
            maxZoom={2}
            colorMode="dark"
          >
            <Background color="#1a1a2e" gap={20} />
            <Controls showInteractive={false} />
            <MiniMap
              nodeColor={() => '#ffb300'}
              maskColor="rgba(13, 13, 18, 0.8)"
              style={{ background: '#0d0d12', border: '1px solid rgba(255,179,0,0.12)' }}
            />
          </ReactFlow>
        </div>
      </AnimatedSection>
    </section>
  );
}
