import ScrollScreen from '@/components/ScrollScreen';
import { StyleSheet, View } from 'react-native';
import LoginTopBar from '@/components/top-bar/LoginTopBar';
import TitleNavLink from '@/components/text/TitleNavLink';
import { Feather } from '@expo/vector-icons';
import AnnouncementCard from '@/components/card/AnnouncementCard';
import ScheduleCard from '@/components/card/ScheduleCard';
import ProgressCard from '@/components/card/ProgressCard';
import LearningResultCard from '@/components/card/LearningResultCard';

function HomeLogin() {
  return (
    <>
      <LoginTopBar />
      <ScrollScreen style={styles.scrollScreen}>
        <View style={styles.section}>
          <TitleNavLink
            title={'Pengumuman'}
            label={'Lihat Semua'}
            trailingIcon={<Feather name={'arrow-right'} />}
          />
          <AnnouncementCard
            title={'Jadwal UAS Tahsin'}
            date={'5 Feb 2024'}
            content={
              'Ujian Akhir Semester akan dilaksanakan pada tanggal 20-24 Februari. Harap persiapkan diri sebaik mungkin.'
            }
          />
        </View>
        <View style={styles.section}>
          <TitleNavLink
            title={'Jadwal Kelas'}
            label={'Lihat Semua'}
            trailingIcon={<Feather name={'arrow-right'} />}
          />
          <ScheduleCard
            title={'Tahsin Dasar'}
            date={'5 Feb 2024'}
            time={'08.00-11.00'}
            location={'Via Zoom'}
            teacher={'Ustad Ahmad'}
          />
          <ScheduleCard
            title={'Tahsin Dasar'}
            date={'5 Feb 2024'}
            time={'08.00-11.00'}
            location={'Via Zoom'}
            teacher={'Ustad Ahmad'}
          />
        </View>
        <View style={styles.section}>
          <TitleNavLink
            title={'Progres Belajar'}
            label={'Lihat Semua'}
            trailingIcon={<Feather name={'arrow-right'} />}
          />
          <ProgressCard
            data={[
              { item: 'Kehadiran', percentage: '85%' },
              { item: 'Tugas', percentage: '65%' },
              { item: 'Quiz', percentage: '15%' },
            ]}
          />
        </View>
        <View style={styles.section}>
          <TitleNavLink
            title={'Hasil Pembelajaran'}
            label={'Lihat Semua'}
            trailingIcon={<Feather name={'arrow-right'} />}
          />
          <LearningResultCard
            data={[
              { item: 'Pengenalan Huruf', score: '85' },
              { item: 'Hukum Tajwid', score: '90' },
            ]}
          />
        </View>
      </ScrollScreen>
    </>
  );
}

const styles = StyleSheet.create({
  scrollScreen: {
    backgroundColor: 'white',
    gap: 23,
    paddingVertical: 24,
  },
  section: {
    gap: 14,
  },
});

export default HomeLogin;
