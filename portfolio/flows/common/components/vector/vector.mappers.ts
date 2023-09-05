import { VectorProps } from "@common/components/vector/vector";
import { VectorData } from "@home/services/vector-service/vector.service.responses";

export const toVectorProps = (vectorData: VectorData): VectorProps => ({
  alt: vectorData.attributes.alt,
  src: vectorData.attributes.src.data.attributes.url,
});
