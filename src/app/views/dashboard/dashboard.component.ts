import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="space-y-6">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Inventory Overview Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-2">Inventory Overview</h2>
          <p class="text-3xl font-bold text-blue-600">1,234</p>
          <p class="text-sm text-gray-500">Total Items</p>
        </div>

        <!-- Orders Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-2">Pending Orders</h2>
          <p class="text-3xl font-bold text-green-600">42</p>
          <p class="text-sm text-gray-500">To be Processed</p>
        </div>

        <!-- Storage Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-2">Storage Capacity</h2>
          <p class="text-3xl font-bold text-purple-600">75%</p>
          <p class="text-sm text-gray-500">Utilization</p>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {} 