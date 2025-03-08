
import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Truck, Package, FileText } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/common/ScrollReveal';
import { toast } from "@/components/ui/use-toast";

const steps = [
  {
    id: 'company',
    name: 'Company Information',
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 'products',
    name: 'Product Selection',
    icon: <Package className="h-6 w-6" />
  },
  {
    id: 'shipping',
    name: 'Shipping Details',
    icon: <Truck className="h-6 w-6" />
  }
];

// Product categories for selection
const productCategories = [
  {
    id: 'mangoes',
    name: 'Mangoes',
    items: ['Alphonso Mangoes', 'Kesar Mangoes', 'Banganapalli Mangoes', 'Dasheri Mangoes']
  },
  {
    id: 'fruits',
    name: 'Exotic Fruits',
    items: ['Pomegranates', 'Guavas', 'Papayas', 'Chikoos (Sapota)']
  },
  {
    id: 'rice',
    name: 'Premium Rice',
    items: ['Basmati Rice', 'Sona Masoori Rice', 'Brown Rice', 'Black Rice']
  },
  {
    id: 'pulses',
    name: 'Organic Pulses',
    items: ['Yellow Lentils (Toor Dal)', 'Red Lentils (Masoor Dal)', 'Black Gram (Urad Dal)', 'Chickpeas (Chana)']
  },
  {
    id: 'spices',
    name: 'Authentic Spices',
    items: ['Turmeric Powder', 'Red Chili Powder', 'Cumin Seeds', 'Coriander Powder', 'Cardamom']
  },
  {
    id: 'millets',
    name: 'Nutrient-Rich Millets',
    items: ['Foxtail Millet', 'Pearl Millet (Bajra)', 'Finger Millet (Ragi)', 'Sorghum (Jowar)']
  }
];

const RequestQuote = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    company: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    },
    products: {
      selectedCategories: [] as string[],
      selectedProducts: [] as string[],
      quantity: '',
      frequency: 'one-time',
      timeline: 'immediate'
    },
    shipping: {
      deliveryAddress: '',
      city: '',
      postalCode: '',
      country: '',
      shippingMethod: 'sea',
      incoterms: 'FOB'
    }
  });

  const goToNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (section: 'company' | 'products' | 'shipping', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleCategorySelection = (categoryId: string) => {
    setFormData(prev => {
      const currentCategories = [...prev.products.selectedCategories];
      
      if (currentCategories.includes(categoryId)) {
        // Remove category and its products
        const category = productCategories.find(c => c.id === categoryId);
        const categoryProducts = category ? category.items : [];
        
        return {
          ...prev,
          products: {
            ...prev.products,
            selectedCategories: currentCategories.filter(id => id !== categoryId),
            selectedProducts: prev.products.selectedProducts.filter(product => 
              !categoryProducts.includes(product)
            )
          }
        };
      } else {
        // Add category
        return {
          ...prev,
          products: {
            ...prev.products,
            selectedCategories: [...currentCategories, categoryId]
          }
        };
      }
    });
  };

  const handleProductSelection = (product: string) => {
    setFormData(prev => {
      const currentProducts = [...prev.products.selectedProducts];
      
      if (currentProducts.includes(product)) {
        return {
          ...prev,
          products: {
            ...prev.products,
            selectedProducts: currentProducts.filter(p => p !== product)
          }
        };
      } else {
        return {
          ...prev,
          products: {
            ...prev.products,
            selectedProducts: [...currentProducts, product]
          }
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a backend service
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours to discuss your requirements.",
    });
    
    // Reset form
    setFormData({
      company: {
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      },
      products: {
        selectedCategories: [],
        selectedProducts: [],
        quantity: '',
        frequency: 'one-time',
        timeline: 'immediate'
      },
      shipping: {
        deliveryAddress: '',
        city: '',
        postalCode: '',
        country: '',
        shippingMethod: 'sea',
        incoterms: 'FOB'
      }
    });
    
    // Go back to first step
    setCurrentStep(0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ScrollReveal animation="fadeIn">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.company.companyName}
                    onChange={(e) => handleChange('company', 'companyName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person*
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.company.contactName}
                    onChange={(e) => handleChange('company', 'contactName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.company.email}
                    onChange={(e) => handleChange('company', 'email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.company.phone}
                    onChange={(e) => handleChange('company', 'phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country*
                </label>
                <input
                  type="text"
                  id="country"
                  value={formData.company.country}
                  onChange={(e) => handleChange('company', 'country', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.company.message}
                  onChange={(e) => handleChange('company', 'message', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  placeholder="Tell us more about your company and requirements..."
                ></textarea>
              </div>
              
              <div className="pt-6">
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="cta-button-primary flex items-center"
                  disabled={!formData.company.companyName || !formData.company.contactName || !formData.company.email || !formData.company.phone || !formData.company.country}
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        );
      case 1:
        return (
          <ScrollReveal animation="fadeIn">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Select Product Categories:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {productCategories.map((category) => (
                    <div 
                      key={category.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                        formData.products.selectedCategories.includes(category.id) 
                          ? 'border-agro-leaf bg-agro-leaf/5' 
                          : 'border-gray-200'
                      }`}
                      onClick={() => handleCategorySelection(category.id)}
                    >
                      <div className="flex items-center">
                        <div className={`h-5 w-5 border rounded-full mr-3 flex items-center justify-center ${
                          formData.products.selectedCategories.includes(category.id) 
                            ? 'border-agro-leaf' 
                            : 'border-gray-300'
                        }`}>
                          {formData.products.selectedCategories.includes(category.id) && (
                            <div className="h-3 w-3 rounded-full bg-agro-leaf"></div>
                          )}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {formData.products.selectedCategories.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Specific Products:</h3>
                  <div className="space-y-4">
                    {productCategories
                      .filter(category => formData.products.selectedCategories.includes(category.id))
                      .map(category => (
                        <div key={category.id} className="border rounded-lg p-4">
                          <h4 className="font-medium mb-3">{category.name}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {category.items.map(product => (
                              <div 
                                key={product}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="checkbox"
                                  id={`product-${product.replace(/\s+/g, '-').toLowerCase()}`}
                                  checked={formData.products.selectedProducts.includes(product)}
                                  onChange={() => handleProductSelection(product)}
                                  className="h-4 w-4 rounded border-gray-300 text-agro-leaf focus:ring-agro-leaf"
                                />
                                <label 
                                  htmlFor={`product-${product.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="text-sm"
                                >
                                  {product}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    value={formData.products.quantity}
                    onChange={(e) => handleChange('products', 'quantity', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    placeholder="e.g., 10 tons, 500 kg, etc."
                  />
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Frequency
                  </label>
                  <select
                    id="frequency"
                    value={formData.products.frequency}
                    onChange={(e) => handleChange('products', 'frequency', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  >
                    <option value="one-time">One-time Order</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.products.timeline}
                  onChange={(e) => handleChange('products', 'timeline', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                >
                  <option value="immediate">As Soon As Possible</option>
                  <option value="within-month">Within 1 Month</option>
                  <option value="within-quarter">Within 3 Months</option>
                  <option value="within-year">Within 1 Year</option>
                </select>
              </div>
              
              <div className="pt-6 flex space-x-4">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="cta-button-secondary flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </button>
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="cta-button-primary flex items-center"
                  disabled={formData.products.selectedProducts.length === 0}
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        );
      case 2:
        return (
          <ScrollReveal animation="fadeIn">
            <div className="space-y-6">
              <div>
                <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address*
                </label>
                <textarea
                  id="deliveryAddress"
                  rows={3}
                  value={formData.shipping.deliveryAddress}
                  onChange={(e) => handleChange('shipping', 'deliveryAddress', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.shipping.city}
                    onChange={(e) => handleChange('shipping', 'city', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code*
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={formData.shipping.postalCode}
                    onChange={(e) => handleChange('shipping', 'postalCode', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="shippingCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Country*
                  </label>
                  <input
                    type="text"
                    id="shippingCountry"
                    value={formData.shipping.country}
                    onChange={(e) => handleChange('shipping', 'country', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="shippingMethod" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Shipping Method
                  </label>
                  <select
                    id="shippingMethod"
                    value={formData.shipping.shippingMethod}
                    onChange={(e) => handleChange('shipping', 'shippingMethod', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  >
                    <option value="sea">Sea Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="both">Both Options</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="incoterms" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Incoterms
                  </label>
                  <select
                    id="incoterms"
                    value={formData.shipping.incoterms}
                    onChange={(e) => handleChange('shipping', 'incoterms', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-agro-leaf focus:border-transparent"
                  >
                    <option value="FOB">FOB (Free On Board)</option>
                    <option value="CIF">CIF (Cost, Insurance, Freight)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-6 flex space-x-4">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="cta-button-secondary flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="cta-button-primary flex items-center"
                  disabled={!formData.shipping.deliveryAddress || !formData.shipping.city || !formData.shipping.postalCode || !formData.shipping.country}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </ScrollReveal>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading 
            title="Request a Quote" 
            subtitle="Tell us about your requirements and we'll get back to you with a detailed quotation" 
            center
          />
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto">
          {/* Steps Indicator */}
          <ScrollReveal animation="slideInRight">
            <div className="mb-12">
              <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    {/* Step Circle */}
                    <div 
                      className={`relative flex items-center justify-center h-12 w-12 rounded-full border-2 
                        ${currentStep === index 
                          ? 'border-agro-leaf bg-agro-leaf text-white' 
                          : currentStep > index 
                            ? 'border-agro-leaf bg-agro-leaf text-white' 
                            : 'border-gray-300 text-gray-500'
                        }`}
                    >
                      {currentStep > index ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        step.icon
                      )}
                      <div className="absolute -bottom-8 w-max text-sm font-medium whitespace-nowrap">
                        {step.name}
                      </div>
                    </div>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div 
                        className={`h-1 w-12 sm:w-24 md:w-32 mx-2 
                          ${currentStep > index ? 'bg-agro-leaf' : 'bg-gray-300'}`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          {/* Form Container */}
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          </div>
          
          {/* Quote Process */}
          <ScrollReveal animation="fadeIn" delay={300}>
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-semibold mb-8">Our Quote Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="h-16 w-16 bg-agro-leaf/10 text-agro-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-medium mb-3">Submit Request</h4>
                  <p className="text-gray-600">Fill out the form with your product requirements and contact details.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="h-16 w-16 bg-agro-mango/10 text-agro-mango rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-medium mb-3">Receive Quote</h4>
                  <p className="text-gray-600">Our team will prepare a detailed quote based on your requirements within 24 hours.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="h-16 w-16 bg-agro-gold/10 text-agro-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-medium mb-3">Confirm Order</h4>
                  <p className="text-gray-600">Finalize details, process payment and schedule delivery of your products.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
