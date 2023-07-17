/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateListingArgs } from "./CreateListingArgs";
import { UpdateListingArgs } from "./UpdateListingArgs";
import { DeleteListingArgs } from "./DeleteListingArgs";
import { ListingCountArgs } from "./ListingCountArgs";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingFindUniqueArgs } from "./ListingFindUniqueArgs";
import { Listing } from "./Listing";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { Category } from "../../category/base/Category";
import { User } from "../../user/base/User";
import { ListingService } from "../listing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Listing)
export class ListingResolverBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _listingsMeta(
    @graphql.Args() args: ListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Listing])
  async listings(
    @graphql.Args() args: ListingFindManyArgs
  ): Promise<Listing[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Listing, { nullable: true })
  async listing(
    @graphql.Args() args: ListingFindUniqueArgs
  ): Promise<Listing | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  async createListing(
    @graphql.Args() args: CreateListingArgs
  ): Promise<Listing> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        category: {
          connect: args.data.category,
        },

        owner: {
          connect: args.data.owner,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateListing(
    @graphql.Args() args: UpdateListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          category: {
            connect: args.data.category,
          },

          owner: {
            connect: args.data.owner,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Listing)
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  async deleteListing(
    @graphql.Args() args: DeleteListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Comment], { name: "comments" })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async resolveFieldComments(
    @graphql.Parent() parent: Listing,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => [Image], { name: "images" })
  async resolveFieldImages(
    @graphql.Parent() parent: Listing,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async resolveFieldCategory(
    @graphql.Parent() parent: Listing
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  async resolveFieldOwner(
    @graphql.Parent() parent: Listing
  ): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
