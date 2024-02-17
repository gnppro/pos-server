import { $Enums } from '@prisma/client';
import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  longDescription: string;

  @ApiProperty()
  shortDescription: string;

  @ApiProperty()
  sku: string;

  @ApiProperty({ type: 'string' })
  barcode: string;

  @ApiProperty({ type: [String] })
  tags: string[];

  @ApiProperty()
  price: number;

  @ApiProperty()
  buyPrice: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  isFeatured: boolean;

  @ApiProperty()
  isTaxable: boolean;

  @ApiProperty()
  isShipping: boolean;

  @ApiProperty()
  isReturnable: boolean;

  @ApiProperty()
  isRefrigerated: boolean;

  @ApiProperty({ enum: $Enums.ProductType })
  type: $Enums.ProductType;

  @ApiProperty()
  weight: number;

  @ApiProperty({ enum: $Enums.WeightUnit })
  weightUnit: $Enums.WeightUnit;

  @ApiProperty()
  packedHeight: number;

  @ApiProperty()
  packedWidth: number;

  @ApiProperty()
  packedDepth: number;

  @ApiProperty({ enum: $Enums.LongUnit })
  packedUnit: $Enums.LongUnit;

  @ApiProperty({ enum: $Enums.ProductStatus })
  status: $Enums.ProductStatus;

  @ApiProperty({ enum: $Enums.PublishedScope })
  publishedScope: $Enums.PublishedScope;

  @ApiProperty()
  publishedAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  supplierId: number;
}
