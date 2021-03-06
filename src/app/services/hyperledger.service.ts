import {Injectable} from '@angular/core';
import {ShoppingCartModel} from "../models/shoppingCart.model";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class HyperledgerService {

  API_URL = environment.api_url;

  constructor(private http: HttpClient,
              private auth: AuthService) {
  }

  /**
   * Register an order into the ledger.
   * @param cart Cart to be transformed into an order and registered.
   */
  async registerOrder(cart: ShoppingCartModel): Promise<Object> {
    const order = this.initializeOrder(cart);
    const header = this.auth.getAuthHeader();

    return this.http.post(this.API_URL + '/registerOrder', {order}, {headers: header})
      .pipe(take(1))
      .toPromise();
  }

  /**
   * Query for a list of orders in the ledger, given a buyerID.
   */
  async queryOrderByUser() {
    const header = this.auth.getAuthHeader();
    const userID = this.auth.getCurrentUserID();

    return this.http.post(this.API_URL + '/queryOrderByBuyerID', {userID}, {headers: header})
      .pipe(take(1))
      .toPromise();
  }

  /**
   * Initialize all the necessary attributes to transform a shopping cart into a correct order.
   * @param cart Shopping cart to be initialized.
   */
  private initializeOrder(cart) {
    cart.ID = this.generateID();
    cart.buyerID = this.auth.getCurrentUserID();
    cart.shopID = '44444';
    cart.date = new Date().toUTCString();
    return cart;
  }

  /**
   * Generate a random 5 digits number as a string.
   */
  private generateID() {
    let num = Math.floor(Math.random() * 100000).toString();
    if (num.length < 5) {
      const len = num.length;
      for (let i = 0; i < 5 - len; i++) {
        num = '0' + num;
      }
    }
    return num;
  }
}
