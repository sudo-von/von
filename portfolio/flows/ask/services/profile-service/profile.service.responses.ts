import { MetricsResponse } from "../metrics-service/metrics.service.responses";
import { APIResponse } from "../../../../services/api-service/api.service.responses";

export type ProfileResponse = {
  id: string;
  user_id: string;
  username: string;
  metrics: MetricsResponse;
};

export type ProfileAPIResponse = APIResponse<ProfileResponse>;
