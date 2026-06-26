import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Facebook, Globe, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20 pb-20 pt-10">
      {/* Header */}
      <section className="container text-center max-w-4xl">
        <Badge variant="outline" className="mb-4 px-4 py-1 text-base border-primary/30 text-primary bg-primary/5">
          تواصل معنا
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
          نحن هنا <span className="text-primary">لخدمتك</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          فريقنا جاهز للرد على استفساراتكم وتلبية طلباتكم على مدار الساعة.
        </p>
      </section>

      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4 pt-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">اتصل بنا</p>
                    <a href="tel:01080012261" className="text-xl font-bold block hover:underline dir-ltr">01080012261</a>
                    <a href="tel:01030325150" className="text-xl font-bold block hover:underline dir-ltr mt-1">01030325150</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground border-none shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4 pt-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">واتساب</p>
                    <p className="text-xl font-bold">تواصل عبر واتساب</p>
                    <p className="text-sm opacity-80 mt-1">متاح 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">الموقع الإلكتروني</p>
                  <a href="https://www.elnegmapallets.com" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    www.elnegmapallets.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">فيسبوك</p>
                  <a href="https://facebook.com/negma.wood" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-primary transition-colors">
                    facebook.com/negma.wood
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">العنوان</p>
                  <p className="text-lg font-bold">المنطقة الصناعية بني سويف</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">الاسم</label>
                    <Input placeholder="الاسم بالكامل" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">رقم الهاتف</label>
                    <Input placeholder="01xxxxxxxxx" className="text-right" dir="ltr" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <Input type="email" placeholder="email@example.com" className="text-right" dir="ltr" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">الرسالة</label>
                  <Textarea placeholder="كيف يمكننا مساعدتك؟" className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full text-lg font-bold py-6">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
