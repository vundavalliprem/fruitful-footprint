
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Truck, Globe, Calendar, Shield, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import ProductCard from "@/components/common/ProductCard";

const productData = {
  mangoes: [
    {
      id: "alphonso",
      name: "Alphonso Mangoes",
      description: "Known as the 'King of Mangoes', Alphonso mangoes are renowned for their rich, creamy, tender texture and delicate, non-fibrous pulp. They have a distinct sweet flavor and pleasing aroma that makes them one of the most sought-after varieties globally.",
      longDescription: "Alphonso mangoes, often referred to as the 'King of Mangoes', are among the most premium varieties exported from India. Cultivated primarily in the Ratnagiri, Devgad, and Sindhudurg districts of Maharashtra, these mangoes develop their characteristic golden-yellow color, distinctive sweet aroma, and unparalleled taste due to the unique coastal climate and soil conditions of the Konkan region. Each fruit is carefully hand-picked and undergoes a meticulous sorting and grading process to ensure only the finest quality reaches international markets. Alphonso mangoes are distinguished by their rich, creamy texture, non-fibrous pulp, and a perfect balance of sweetness that lingers on the palate. The season typically runs from April to June, during which time these prized mangoes are exported to discerning customers worldwide who appreciate their exceptional quality and flavor profile.",
      image: "/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png",
      gallery: [
        "/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png",
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png"
      ],
      price: "$25-35 per box",
      origin: "Maharashtra, India",
      seasonality: "April to June",
      certifications: ["APEDA Certified", "Global GAP", "Organic Certified"],
      features: ["Premium Quality", "Hand-Picked", "Naturally Ripened", "Pesticide-Free"]
    },
    {
      id: "kesar",
      name: "Kesar Mangoes",
      description: "Kesar mangoes are known for their distinct aroma and saffron-colored pulp, hence the name 'Kesar' which means saffron in Hindi. They have a sweet taste with a hint of tanginess.",
      longDescription: "Kesar mangoes, often referred to as the 'Queen of Mangoes', are one of India's most exquisite mango varieties. Named after the saffron spice (kesar) due to their distinctive orange-colored pulp, these mangoes are primarily cultivated in the Girnar foothills of Gujarat and parts of Maharashtra. What sets Kesar mangoes apart is their unique combination of sweetness with subtle notes of tartness, creating a complex flavor profile that mango connoisseurs cherish. The fruit's external appearance—smaller and rounder than Alphonso with a green to yellow skin—often belies the intense aromatic experience within. Kesar mangoes are renowned for their long shelf life and excellent shipping qualities, making them ideal for export markets. The cultivation follows traditional methods passed down through generations of farmers, ensuring each fruit maintains the characteristic taste and quality that has made this variety globally recognized.",
      image: "/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png",
      gallery: [
        "/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png",
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png"
      ],
      price: "$20-30 per box",
      origin: "Gujarat, India",
      seasonality: "May to July",
      certifications: ["APEDA Certified", "Global GAP"],
      features: ["Rich Saffron Pulp", "Hand-Picked", "Naturally Ripened", "Long Shelf Life"]
    }
  ],
  fruits: [
    {
      id: "pomegranate",
      name: "Premium Pomegranates",
      description: "Our premium pomegranates are known for their vibrant red arils, perfect balance of sweetness, and exceptional juiciness.",
      longDescription: "Agrovital Exports offers premium-quality pomegranates sourced from the finest orchards in Maharashtra and Karnataka. These pomegranates are celebrated for their vibrant ruby-red arils, exceptional juiciness, and perfect balance of sweetness with a subtle tartness. Each fruit is carefully cultivated using sustainable farming practices that respect both the environment and traditional agricultural wisdom. Our pomegranates undergo rigorous quality control measures to ensure optimal size, color, and flavor consistency. The fruits feature a thick, leathery outer rind that protects the hundreds of jewel-like arils inside, each bursting with nutritious juice. Known for their high antioxidant content and health benefits, our pomegranates are harvested at peak ripeness to ensure maximum flavor and nutritional value. We export these premium fruits to discerning markets worldwide, where they are valued for both their culinary versatility and medicinal properties.",
      image: "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png",
      gallery: [
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png",
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png"
      ],
      price: "$15-25 per box",
      origin: "Maharashtra, India",
      seasonality: "October to February",
      certifications: ["Global GAP", "Organic Certified"],
      features: ["Rich in Antioxidants", "Hand-Picked", "Naturally Grown", "Premium Selection"]
    }
  ],
  rice: [
    {
      id: "basmati",
      name: "Premium Basmati Rice",
      description: "Long-grain aromatic rice known for its distinct fragrance, fluffy texture, and delicate flavor. Perfect for biryanis and pulao dishes.",
      longDescription: "Our Premium Basmati Rice represents the pinnacle of rice cultivation, hand-selected from the fertile foothills of the Himalayas where ideal growing conditions impart its distinctive characteristics. This extraordinary long-grain rice is celebrated worldwide for its enticing aroma, reminiscent of nuts and flowers, which fills the kitchen during cooking. The grains elongate to nearly twice their original length when cooked, remaining separate and fluffy rather than sticking together. This premium quality basmati undergoes a careful aging process of 12-24 months, enhancing its aromatic properties and cooking qualities. Each batch is meticulously sorted using advanced optical technology to ensure consistent grain length and quality. Our export-grade basmati meets the strictest international standards for purity and is free from artificial additives. The subtle, nutty flavor profile makes it the perfect companion for both elaborate dishes like biryanis and simple preparations where the rice itself can be the star. Available in vacuum-sealed packaging to preserve freshness, our Premium Basmati Rice delivers an authentic taste of Indian culinary heritage to discerning customers worldwide.",
      image: "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
      gallery: [
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png",
        "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png"
      ],
      price: "$10-20 per kg",
      origin: "North India (Punjab, Haryana)",
      seasonality: "Available Year-Round",
      certifications: ["APEDA Certified", "Organic Certified"],
      features: ["Aged 12-24 Months", "Hand-Selected", "Non-GMO", "Premium Quality"]
    }
  ],
  pulses: [
    {
      id: "organic-lentils",
      name: "Organic Red Lentils",
      description: "Nutrient-rich, quick-cooking red lentils that are perfect for soups, stews, and curries. High in protein and fiber.",
      longDescription: "Our Organic Red Lentils exemplify the perfect balance between traditional farming wisdom and modern sustainable agriculture. Cultivated in the mineral-rich soils of central India, these vibrant, salmon-colored lentils are grown without chemical pesticides or synthetic fertilizers, adhering to strict organic standards. The distinctive red lentils are hulled and split masoor dal, known for their quick cooking time and tendency to break down into a creamy consistency when cooked. This makes them ideal for hearty soups, traditional dals, and purées. Beyond their culinary versatility, our red lentils are nutritional powerhouses, packed with plant-based protein, dietary fiber, and essential micronutrients including iron, folate, and magnesium. We work directly with farmer cooperatives who practice crop rotation and soil conservation techniques, ensuring sustainability while producing lentils of exceptional quality. Each batch undergoes rigorous cleaning and sorting processes, meeting the highest international food safety standards. Our lentils are packaged in moisture-resistant containers to maintain freshness and nutritional integrity. With their delicate, slightly sweet flavor profile and impressive nutritional benefits, these organic red lentils have become a staple ingredient for health-conscious consumers and culinary professionals around the world.",
      image: "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png",
      gallery: [
        "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png",
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png"
      ],
      price: "$8-15 per kg",
      origin: "Madhya Pradesh, India",
      seasonality: "Available Year-Round",
      certifications: ["USDA Organic", "EU Organic", "Non-GMO Verified"],
      features: ["High Protein", "Quick Cooking", "Sustainably Farmed", "Gluten-Free"]
    }
  ],
  spices: [
    {
      id: "turmeric",
      name: "Premium Turmeric Powder",
      description: "Vibrant, aromatic turmeric powder with high curcumin content. Known for its earthy flavor and health benefits.",
      longDescription: "Our Premium Turmeric Powder represents the gold standard in spice production, derived from the finest Alleppey finger turmeric cultivated in the spice gardens of Kerala. This exceptional variety is prized for its remarkably high curcumin content of 5-7%, significantly above industry averages, giving it both superior medicinal properties and a vibrant golden-orange hue. The turmeric rhizomes are carefully harvested at peak maturity, then undergo a traditional curing process that enhances their aromatic compounds. Our production method involves slow grinding in temperature-controlled conditions to preserve the essential oils and bioactive components that contribute to turmeric's renowned health benefits. This artisanal approach results in a powder with an intensely earthy, slightly bitter flavor profile with subtle notes of orange and ginger that transforms any dish it touches. Each batch is tested for purity, color strength, and curcumin content to ensure consistent quality. Unlike mass-produced alternatives, our turmeric maintains its potency and flavor profile for longer periods due to our protective packaging that shields it from light and moisture. Beyond its culinary applications in curries, golden milk, and various cuisines worldwide, this premium turmeric is sought after for its anti-inflammatory and antioxidant properties. We maintain direct relationships with farmer collectives who practice sustainable agriculture, ensuring that this ancient spice is produced with respect for both tradition and the environment.",
      image: "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png",
      gallery: [
        "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png",
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png"
      ],
      price: "$12-18 per kg",
      origin: "Kerala, India",
      seasonality: "Available Year-Round",
      certifications: ["USDA Organic", "ISO 22000", "Non-GMO Verified"],
      features: ["High Curcumin Content", "Steam Sterilized", "No Additives", "Premium Quality"]
    }
  ],
  millets: [
    {
      id: "foxtail-millet",
      name: "Organic Foxtail Millet",
      description: "Ancient grain with a mild, nutty flavor. Gluten-free, high in protein, and rich in essential minerals.",
      longDescription: "Our Organic Foxtail Millet, known locally as 'kangni' or 'kakum', represents a return to the nutritional wisdom of ancient India while meeting modern demands for sustainable superfoods. Cultivated in the dryland farming regions of Karnataka and Tamil Nadu using traditional rain-fed agriculture, this small-seeded ancient grain requires minimal water input, making it both environmentally friendly and drought-resistant. The tiny, yellow grains have a distinctive mild, nutty flavor and cook to a fluffy texture with a slight sweetness that complements both savory and sweet preparations. Nutritionally exceptional, our foxtail millet contains complex carbohydrates that release glucose slowly into the bloodstream, making it ideal for maintaining stable blood sugar levels. It provides a complete protein profile with all essential amino acids, significant amounts of dietary fiber, and an impressive mineral content including iron, calcium, magnesium, and zinc. Our direct partnerships with small-scale farmers ensure fair compensation while preserving traditional cultivation knowledge. The millet undergoes careful processing to remove the indigestible outer husk while maintaining the nutrient-rich germ and bran layers. Each batch is laboratory tested for purity and nutritional content before being packaged in protective materials that extend shelf life without artificial preservatives. This versatile grain can be prepared like rice, made into porridge, ground into flour for baking, or even popped like corn, offering culinary flexibility alongside its remarkable health benefits. As global interest in alternative grains continues to grow, our organic foxtail millet stands out for its exceptional quality, environmental credentials, and contribution to preserving India's agricultural heritage.",
      image: "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
      gallery: [
        "/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png",
        "/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png",
        "/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png"
      ],
      price: "$7-12 per kg",
      origin: "Karnataka, India",
      seasonality: "Available Year-Round",
      certifications: ["USDA Organic", "EU Organic", "Gluten-Free Certified"],
      features: ["High Protein", "Low Glycemic Index", "Water Efficient Crop", "Naturally Gluten-Free"]
    }
  ]
};

const ProductDetail = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (category && id && productData[category as keyof typeof productData]) {
      const foundProduct = productData[category as keyof typeof productData].find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveImage(foundProduct.image);
        setFormData(prev => ({
          ...prev,
          message: `I am interested in ${foundProduct.name}. Please send me more information.`
        }));
        setLoading(false);
      } else {
        navigate('/products');
      }
    } else {
      navigate('/products');
    }
  }, [category, id, navigate]);

  const handleAddToQuote = () => {
    toast({
      title: "Added to Quote",
      description: `${product.name} has been added to your quote request.`,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly about your product inquiry.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `I am interested in ${product.name}. Please send me more information.`
    });
    setShowInquiryForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 w-40 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-60 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="mb-8">
          <Link 
            to="/products" 
            className="inline-flex items-center text-agro-leaf hover:text-agro-mango transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-12">
            <ScrollReveal animation="fadeIn">
              <div className="space-y-6">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img 
                    src={activeImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img ? 'border-agro-gold' : 'border-transparent'}`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideInRight" delay={100}>
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-agro-gold/10 text-agro-gold rounded-full text-sm font-medium">
                    Premium Quality
                  </div>
                  <div className="px-3 py-1 bg-agro-leaf/10 text-agro-leaf rounded-full text-sm font-medium">
                    Export Grade
                  </div>
                </div>

                <div className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-agro-leaf mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Origin</p>
                        <p className="text-gray-700">{product.origin}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-agro-leaf mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Seasonality</p>
                        <p className="text-gray-700">{product.seasonality}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-agro-leaf mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Certifications</p>
                        <p className="text-gray-700">{product.certifications.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-agro-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => setShowInquiryForm(!showInquiryForm)}
                    className="cta-button-primary"
                  >
                    Inquire Now
                  </button>
                  <button 
                    onClick={handleAddToQuote}
                    className="cta-button-secondary"
                  >
                    Add to Quote
                  </button>
                </div>

                {showInquiryForm && (
                  <div className="pt-6 border-t border-gray-200 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Inquire About This Product</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20 resize-none"
                          required
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-agro-leaf text-white rounded-md hover:bg-agro-leaf/90 transition-colors"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-12 mb-16">
            <SectionHeading title="Product Description" />
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.longDescription}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-12">
            <SectionHeading title="Related Products" subtitle="Explore other high-quality products from our collection" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productData[category as keyof typeof productData]
                .filter((p: any) => p.id !== id)
                .slice(0, 3)
                .map((relatedProduct: any, index: number) => (
                  <ProductCard 
                    key={index}
                    product={{
                      id: relatedProduct.id,
                      name: relatedProduct.name,
                      image: relatedProduct.image,
                      description: relatedProduct.description,
                      link: `/products/${category}/${relatedProduct.id}`,
                      category: category,
                      seasonality: relatedProduct.seasonality,
                      origin: relatedProduct.origin
                    }}
                  />
                ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ProductDetail;
