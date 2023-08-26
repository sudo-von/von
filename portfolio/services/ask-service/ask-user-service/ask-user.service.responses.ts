import { APIResponse } from "../../api-service/api.service.responses";
import { AskMetricsResponse } from "../ask-metrics-service/ask-metrics.service.responses";

export type AskUserResponse = {
  id: string;
  user_id: string;
  username: string;
  metrics: AskMetricsResponse;
};

export type AskUserAPIResponse = APIResponse<AskUserResponse>;
