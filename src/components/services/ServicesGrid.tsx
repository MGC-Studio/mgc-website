import { CheckCircle2 } from "lucide-react";
import { Service } from "./types";

export default function ServicesGrid({ services }: { services: Service[] }) {
    return services.map((service, index) => (
        <div
            key={index}
            id={service.id}
            className={`grid md:grid-cols-2 gap-12 items-center py-16 ${index !== 0 ? 'border-t border-white/10 pt-16' : ''
                }`}
        >
            <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    {service.icon}
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-xl">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    ));
};
