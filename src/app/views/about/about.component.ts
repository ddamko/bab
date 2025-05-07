import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-6">About WMS</h1>
      
      <div class="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-2">Warehouse Management System</h2>
          <p class="text-gray-600">
            A comprehensive solution for managing warehouse operations, inventory tracking, and order fulfillment.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Key Features</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time inventory tracking</li>
            <li>Order management and fulfillment</li>
            <li>Storage optimization</li>
            <li>Reporting and analytics</li>
            <li>User access control</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Version Information</h3>
          <p class="text-gray-600">Version 1.0.0</p>
          <p class="text-sm text-gray-500">Last updated: March 2024</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {} 