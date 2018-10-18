import { NgModule } from '@angular/core';<% if (commonModule) { %>
import { CommonModule } from '@angular/common';<% } %><% if (routing) { %>import {NovaFilterComponent} from './containers/nova-filter.component';
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

import {<%= classify(name) %>Component} from './containers/<%= dasherize(name) %>.component';


@NgModule({
  imports: [
      <% if (commonModule) { %>
    CommonModule<%= routing ? ',' : '' %><% } %><% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: [
      <%= classify(name) %>Component
  ]
})
export class <%= classify(name) %>Module { }
