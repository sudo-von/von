import { APIResponse } from "@services/api-service/api.service.responses";
import { MetricsResponse } from "@ask/services/metrics-service/metrics.service.responses";

export type ProfileResponse = {
  id: string;
  metrics: MetricsResponse;
  user_id: string;
  username: string;
};

export type ProfileAPIResponse = APIResponse<ProfileResponse>;
