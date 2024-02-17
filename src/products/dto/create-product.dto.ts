import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsEnum,
  IsDate,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { $Enums } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty({
    example: 'Apple',
    description: 'The name of the product',
    required: true,
  })
  @IsString()
  @MaxLength(25)
  name: string;

  @ApiProperty({
    example: 'This is a long description',
    description: 'The long description of the product',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  longDescription?: string | null;

  @ApiProperty({
    example: 'This is a short description',
    description: 'The short description of the product',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  shortDescription?: string | null;

  @ApiProperty({
    example: 'ABC123',
    description: 'The SKU of the product',
    required: false,
  })
  @IsOptional()
  @IsString()
  sku?: string | null;

  @ApiProperty({
    type: 'string',
    example: '123456789',
    description: 'The barcode of the product',
    required: false,
  })
  @IsOptional()
  @IsString()
  barcode?: string | null;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'The tags of the product',
    required: false,
  })
  @IsOptional()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({
    example: 9.99,
    description: 'The price of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiProperty({
    example: 5.99,
    description: 'The buy price of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  buyPrice?: number | null;

  @ApiProperty({
    example: 10,
    description: 'The quantity of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  quantity?: number;

  @ApiProperty({
    example: false,
    description: 'Whether the product is featured',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the product is taxable',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isTaxable?: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the product requires shipping',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isShipping?: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the product is returnable',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isReturnable?: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the product requires refrigeration',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isRefrigerated?: boolean;

  @ApiProperty({
    enum: $Enums.ProductType,
    example: 'SIMPLE',
    description: 'The type of the product',
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.ProductType)
  type?: $Enums.ProductType;

  @ApiProperty({
    example: 0.5,
    description: 'The weight of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  weight?: number | null;

  @ApiProperty({
    enum: $Enums.WeightUnit,
    example: 'KG',
    description: 'The weight unit of the product',
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.WeightUnit)
  weightUnit?: $Enums.WeightUnit | null;

  @ApiProperty({
    example: 10,
    description: 'The packed height of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  packedHeight?: number | null;

  @ApiProperty({
    example: 5,
    description: 'The packed width of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  packedWidth?: number | null;

  @ApiProperty({
    example: 3,
    description: 'The packed depth of the product',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  packedDepth?: number | null;

  @ApiProperty({
    enum: $Enums.LongUnit,
    example: 'CM',
    description: 'The packed unit of the product',
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.LongUnit)
  packedUnit?: $Enums.LongUnit | null;

  @ApiProperty({
    enum: $Enums.ProductStatus,
    example: 'DRAFT',
    description: 'The status of the product',
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.ProductStatus)
  status?: $Enums.ProductStatus;

  @ApiProperty({
    enum: $Enums.PublishedScope,
    example: 'WEB',
    description: 'The published scope of the product',
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.PublishedScope)
  publishedScope?: $Enums.PublishedScope;

  @ApiProperty({
    example: '2022-01-01T00:00:00Z',
    description: 'The published date of the product',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  publishedAt?: Date | string | null;

  @ApiProperty({
    example: '2022-01-01T00:00:00Z',
    description: 'The creation date of the product',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date | string;

  @ApiProperty({
    example: '2022-01-01T00:00:00Z',
    description: 'The last update date of the product',
    required: false,
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date | string;
}
