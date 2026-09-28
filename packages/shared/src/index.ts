export type SubscriptionTier = 'FREE' | 'PREMIUM' | 'ADMIN';

export type DataStatus = 'VERIFIED' | 'PARTIAL' | 'OUTDATED' | 'MISSING' | 'CONFLICTING';

export type MatchStatus = 'SCHEDULED' | 'LIVE' | 'FINISHED' | 'POSTPONED';

export interface AnalysisProjection {
  matchId: string;
  xgHome: number | null;
  xgAway: number | null;
  expectedGoals: number | null;
  projectedCorners: number | null;
  projectedCards: number | null;
  confidence: number;
  status: DataStatus;
}
